import { all, takeLatest } from 'redux-saga/effects';
import {
  loadTodoLists,
  addTodoList,
  addTodoItem,
  setItemFinished,
} from './todolists';

import { TodoListsTypes } from '~/store/ducks/todolists';

export default function* rootSaga() {
  return yield all([
    takeLatest(TodoListsTypes.GET_TODOLISTS_REQUEST, loadTodoLists),
    takeLatest(TodoListsTypes.ADD_TODOLIST_REQUEST, addTodoList),
    takeLatest(TodoListsTypes.ADD_TODOITEM_REQUEST, addTodoItem),
    takeLatest(TodoListsTypes.SET_ITEM_FINISHED_REQUEST, setItemFinished),
  ]);
}
