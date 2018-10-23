import React from 'react';
import { ButtonContainer } from '../../containers';

const Buttons = () => (
  <div>
    <ButtonContainer  text="refresh"/>
    <ButtonContainer filter="SHOW_LATEST_BLOCK" text="Last Block"/>
    <ButtonContainer filter="SHOW_LATEST_5_BLOCKS" text="Last 5 Blocks"/>
  </div>
);

export default Buttons;
