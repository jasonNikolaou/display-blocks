import React from 'react';
import Block from './Block';

const Blocks = ({ blocks }) => {
  return (
    <ul>
      { blocks.map((block) =>
      <li key={block.hash}>
        <Block {...block}/>
      </li>
    )}
    </ul>
  );
};

export default Blocks;
