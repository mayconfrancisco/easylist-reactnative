import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TodoListsActions from '~/store/ducks/todolists';

import {
  Container,
  Input,
  ContainerButtons,
  Cancel,
  Add,
  BtTextOK,
  BtTextCancel,
  AddItem,
  AddItemText,
} from './styles';

class AddTodoListsForm extends Component {
  static propTypes = {
    todoListID: PropTypes.string.isRequired,
    addTodoitemRequest: PropTypes.func.isRequired,
  }

  state = {
    addListVisible: false,
    addListInput: '',
  }

  handleAdd = () => {
    const { todoListID, addTodoitemRequest } = this.props;
    const { addListVisible, addListInput } = this.state;

    addTodoitemRequest(todoListID, addListInput);
    this.setState({ addListVisible: !addListVisible, addListInput: '' });
  }

  render() {
    const { addListVisible, addListInput } = this.state;
    return (
      addListVisible ? (
        <Container>
          <Input
            autoFocus
            onChangeText={text => this.setState({ addListInput: text })}
            value={addListInput}
          />
          <ContainerButtons>
            <Cancel onPress={() => this.setState({ addListVisible: !addListVisible, addListInput: '' })}>
              <BtTextCancel>Cancelar</BtTextCancel>
            </Cancel>
            <Add onPress={this.handleAdd}>
              <BtTextOK>Adicionar</BtTextOK>
            </Add>
          </ContainerButtons>
        </Container>
      ) : (
        <AddItem onPress={() => this.setState({ addListVisible: !addListVisible })}>
          <AddItemText>Adicionar Item</AddItemText>
        </AddItem>
      )
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(TodoListsActions, dispatch);

export default connect(null, mapDispatchToProps)(AddTodoListsForm);
