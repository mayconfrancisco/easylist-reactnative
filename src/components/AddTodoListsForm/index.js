import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoListsActions from '~/store/ducks/todolists';

import {
  Container,
  Input,
  ContainerButtons,
  Cancel,
  Add,
  BtTextOK,
  BtTextCancel,
  BtAddTodoList,
  BtAddTodoListText,
} from './styles';

class AddTodoListsForm extends Component {
  state = {
    addListVisible: false,
    addListInput: '',
  }

  handleAdd = () => {
    const { addTodolistRequest } = this.props;
    const { addListInput, addListVisible } = this.state;
    addTodolistRequest(addListInput);
    this.setState({ addListInput: '', addListVisible: !addListVisible });
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
        <BtAddTodoList onPress={() => this.setState({ addListVisible: !addListVisible })}>
          <BtAddTodoListText>Adicioinar Lista</BtAddTodoListText>
        </BtAddTodoList>
      )
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(TodoListsActions, dispatch);

export default connect(null, mapDispatchToProps)(AddTodoListsForm);
