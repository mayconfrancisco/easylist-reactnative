import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TodoListsActions from '~/store/ducks/todolists';
import AddTodoItemForm from '~/components/AddTodoItemForm';

import {
  Container, Title, Items, Todo, TodoText,
} from './styles';

const TodoList = ({ todoList, setItemFinishedRequest }) => (
  <Container>
    <Title>{todoList.name}</Title>
    <Items
      data={todoList.items}
      keyExtractor={item => String(item._id)}
      renderItem={({ item }) => (
        <Todo onPress={() => setItemFinishedRequest(todoList._id, item._id, !item.isFinished)}>
          <TodoText finished={item.isFinished}>{item.name}</TodoText>
        </Todo>
      )}
    />
    <AddTodoItemForm todoListID={todoList._id} />
  </Container>
);

TodoList.propTypes = {
  todoList: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      isFinished: PropTypes.bool,
    })),
  }).isRequired,
  setItemFinishedRequest: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   todolists: state.todolists,
// });

const mapDispatchToProps = dispatch => bindActionCreators(TodoListsActions, dispatch);

export default connect(null, mapDispatchToProps)(TodoList);
