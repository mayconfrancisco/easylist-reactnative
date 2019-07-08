import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TodoListsActions from '~/store/ducks/todolists';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import TodoList from '~/components/TodoList';
import AddTodoListsForm from '~/components/AddTodoListsForm';

import {
  Container, WrapContent, TodoLists, Space,
} from './styles';

class Main extends Component {
  static propTypes = {
    getTodolistsRequest: PropTypes.func.isRequired,
    todolists: PropTypes.shape({
      data: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,
  }

  componentDidMount() {
    const { getTodolistsRequest } = this.props;
    getTodolistsRequest();
  }

  render() {
    const { todolists: { data, loading } } = this.props;
    return (
      <Container>
        <Header title="EasyList" />
        <WrapContent>
          { loading ? (
            <Loading size="large" />
          ) : (
            <TodoLists
              ListHeaderComponent={() => <Space />}
              data={data}
              keyExtractor={list => String(list._id)}
              renderItem={({ item: todoList }) => <TodoList todoList={todoList} />}
              ListFooterComponent={() => <AddTodoListsForm />}
            />
          )}
        </WrapContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  todolists: state.todolists,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoListsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
