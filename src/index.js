import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { VisibleBlocksContainer } from './containers';
import { store } from './store';
import { Buttons } from './components';
//import { Buttons } from './components';

// let blocks = [{
//   hash: "000000000000000000096d34937cb96cd124d99c65a943473e66e3c5a65a37200",
//   blockHeight: 546765,
//   numOfTx: 1024
// }];
/*
fetch('https://blockchain.info/q/getblockcount')
.then(response => response.json())
.then(blockHeight => {

  fetch(`https://blockchain.info/block-height/${blockHeight}?format=json`)
  .then(response => response.json())
  .then(json => {
    console.log(json);
  })
  .catch(err => console.log(err))
})
.catch(err => console.log(err))
*/

console.log("store: ", store.getState());

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
