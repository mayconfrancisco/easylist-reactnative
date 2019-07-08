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
    loading: false, data: [...state.data, todoList],
  }),

  [Types.ADD_TODOITEM_REQUEST]: state => state.merge({ loading: false }), // TODO #1
  [Types.ADD_TODOITEM_SUCCESS]: (state, { idTodoList, todoItem }) => {
    // TODO - Nao fui capaz de resolver rapidamente com update, updateIn, set ou setIn
    // Sera necessario mais tempo e paciencia pra verificar o funcionamento com a
    // minha estrutura de dados/estado
    // Isso causa algumas anomalias na interface, já que a ordem dos items
    // muda, outro item para adicionar ;)
    const othersLists = state.data.filter(tdl => tdl._id !== idTodoList);
    const todoListIDX = state.data.findIndex(tdl => tdl._id === idTodoList);

    const newItems = state.data[todoListIDX].items.concat(todoItem);
    const newList = { ...state.data[todoListIDX] };
    newList.items = newItems;
    return state.merge({ loading: false, data: [...othersLists, newList] }); // TODO #1
  },

  [Types.SET_ITEM_FINISHED_REQUEST]: state => state.merge({ loading: false }), // TODO #1
  [Types.SET_ITEM_FINISHED_SUCCESS]: (state, { idTodoList, idTodoItem, isFinished }) => {
    // TODO - resolver item acima e usar o mesmo aqui
    const othersLists = state.data.filter(tdl => tdl._id !== idTodoList);
    const todoListIDX = state.data.findIndex(tdl => tdl._id === idTodoList);
    const outhresItems = state.data[todoListIDX].items.filter(tdi => tdi._id !== idTodoItem);
    const item = state.data[todoListIDX].items.find(tdi => tdi._id === idTodoItem);
    const newItem = { ...item, isFinished };
    const newItems = [...outhresItems, newItem];
    const newList = { ...state.data[todoListIDX], items: newItems };

    return state.merge({ loading: false, data: [...othersLists, newList] });
  }, // TODO #1

});
