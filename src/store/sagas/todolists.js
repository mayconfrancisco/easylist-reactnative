import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import TodoListsActions from '~/store/ducks/todolists';

export function* loadTodoLists() {
  try {
    const { data } = yield call(api.get, '/list?fat=y');

    yield put(TodoListsActions.getTodolistsSuccess(data));
  } catch (err) {
    // TODO - add fluxo de erro com o redux
    console.tron.log('Erro no saga LoadTodoLists', err);
  }
}

export function* addTodoList({ todoList }) {
  try {
    const { data } = yield call(api.post, '/list', { name: todoList });

    yield put(TodoListsActions.addTodolistSuccess(data));
  } catch (err) {
    console.tron.log('Erro no saga addTodoList', err);
  }
}

export function* addTodoItem({ idTodoList, todoItem }) {
  try {
    const { data } = yield call(api.post, `/list/${idTodoList}/item`, { name: todoItem });

    yield put(TodoListsActions.addTodoitemSuccess(idTodoList, data));
  } catch (err) {
    console.tron.log('Erro no saga addTodoItem', err);
  }
}

export function* setItemFinished({ idTodoList, idTodoItem, isFinished }) {
  try {
    yield call(api.put, `/list/${idTodoList}/item/${idTodoItem}`, { isFinished });
    yield put(TodoListsActions.setItemFinishedSuccess(idTodoList, idTodoItem, isFinished));
  } catch (err) {
    console.tron.log('Erro no saga setItemFinished', err.message);
  }
}
