import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const composer = __DEV__
  ? compose(
    applyMiddleware(sagaMiddleware),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
