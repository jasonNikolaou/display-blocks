import  appReducer  from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { fetchBlocksEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  appReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(fetchBlocksEpic);

export default store;
