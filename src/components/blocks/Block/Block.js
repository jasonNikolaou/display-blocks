import React from 'react';

const Block = ({ hash, height, time }) => {
  return (
    <div id="block">
      <p>Hash: {hash}</p>
      <p>Height: {height}</p>
      <p>Age: {time}</p>
    </div>
  );
};
export default Block;
