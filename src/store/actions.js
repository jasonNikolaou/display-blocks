import fetch from 'cross-fetch';

const fetchBlocks = () => {
  return dispatch => {
    dispatch({type: "REQUEST_BLOCKS"});
    //fetch last 5 blocks.
    return fetch()
    .then(response => response.json())
    .then(json => dispatch(type:'RECEIVE_BLOCKS', blocks: json)));
  }
};
