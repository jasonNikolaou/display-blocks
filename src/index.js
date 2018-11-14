import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { VisibleBlocksContainer } from './containers';
import { store } from './store';
import { Buttons } from './components';

const App = () => (
  <div>
    <VisibleBlocksContainer />
    <Buttons />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
