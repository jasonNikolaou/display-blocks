import fetch from 'cross-fetch';

const blockchainData = (onResult) => {
  fetch(`https://blockchain.info/blocks/${Date.now()}?format=json`)
  .then(response => response.json())
  .then( data => onResult(data.blocks))
};

export default blockchainData;
