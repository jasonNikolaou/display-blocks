import React from 'react';

const Block = ({ hash, blockHeight, numOfTx }) => {
  return (
    <div id="block">
      <p>Hash: {hash}</p>
      <p>Height: {blockHeight}</p>
      <p>Transactions: {numOfTx}</p>
    </div>
  );
};
export default Block;
