import { connect } from 'react-redux';
import { Blocks } from '../../components';

const getVisibleBlocks = (blocks, filter) => {
  if (filter === 'SHOW_LATEST_BLOCK') {
    return [ blocks[0] ];
  }
  else if (filter === 'SHOW_LATEST_5_BLOCKS') {
    return blocks.slice(0,5);
  }
  else {
    return blocks;
  }
};

const mapStateToProps = state => {
  return {
    blocks: getVisibleBlocks(state.blocks, state.filter)
  };
};

const VisibleBlocksContainer = connect(
  mapStateToProps,
  null
)(Blocks);

export default VisibleBlocksContainer;
