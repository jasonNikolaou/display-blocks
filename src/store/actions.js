import { blockchainData } from '../services-apis';

const fetchBlocks = () => dispatch => {
    dispatch({type: "REQUEST_BLOCKS"});
    //fetch last 5 blocks.
    blockchainData(data =>
      dispatch({
      type:'RECEIVE_BLOCKS',
      blocks: data,
    }));
};

export { fetchBlocks };
