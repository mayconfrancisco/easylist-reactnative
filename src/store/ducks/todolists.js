import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Actions
 */
const { Types, Creators } = createActions({
  getTodolistsRequest: null,
  getTodolistsSuccess: ['data'],

  addTodolistRequest: ['todoList'],
  addTodolistSuccess: ['todoList'],

  addTodoitemRequest: ['idTodoList', 'todoItem'],
  addTodoitemSuccess: ['idTodoList', 'todoItem'],

  setItemFinishedRequest: ['idTodoList', 'idTodoItem', 'isFinished'],
  setItemFinishedSuccess: ['idTodoList', 'idTodoItem', 'isFinished'],
});

export const TodoListsTypes = Types;
export default Creators;

/**
 * Initial State
 */
const INITIAL_STATE = Immutable({
  data: [],
  loading: true,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TODOLISTS_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_TODOLISTS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),

  // TODO #1 add loading especifico para o componente AddTodo
  [Types.ADD_TODOLIST_REQUEST]: state => state.merge({ loading: false }),
  [Types.ADD_TODOLIST_SUCCESS]: (state, { todoList }) => state.merge({
    loading: false,
    data: [...state.data, todoList],
  }),

  [Types.ADD_TODOITEM_REQUEST]: state => state.merge({ loading: false }), // TODO #1
  [Types.ADD_TODOITEM_SUCCESS]: (state, { idTodoList, todoItem }) => {
    const newList = state.data.map(list => (list._id !== idTodoList
      ? list
      : {
        ...list,
        items: [...list.items, todoItem],
      }));
    return state.merge({ data: newList, loading: false }); // TODO #1
  },

  [Types.SET_ITEM_FINISHED_REQUEST]: state => state.merge({ loading: false }), // TODO #1
  [Types.SET_ITEM_FINISHED_SUCCESS]: (state, { idTodoList, idTodoItem, isFinished }) => {
    const newList = state.data.map(list => (list._id !== idTodoList
      ? list
      : {
        ...list,
        items: list.items.map(item => (item._id !== idTodoItem
          ? { ...item }
          : {
            ...item,
            isFinished,
          })),
      }));

    return state.merge({ data: newList, loading: false });
  },
});
