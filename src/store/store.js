import  appReducer  from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
