
let blocks = [
  {
    hash: "000000000000000000096d34937cb96cd124d99c65a943473e66e3c5a65a37200",
    blockHeight: 546765,
    numOfTx: 1024
  },
  {
    hash: "000000000000000000096d34937cb96c7373734d99c65a943473e66e3c5a65a37",
    blockHeight: 546765,
    numOfTx: 2048
  },
  {
    hash: "000000000000000000096d34937cb9424242124d99c65a943473e66e3c5a65a37",
    blockHeight: 546765,
    numOfTx: 42
  },
  {
    hash: "000000000000000000096d34937c1717ad124d99c65a943473e66e3c5a65a3720",
    blockHeight: 546765,
    numOfTx: 73
  },
  {
    hash: "000000000000000000096d34937cb96cd124d232323a943473e66e3c5a65a3720",
    blockHeight: 546765,
    numOfTx: 15
  }
];

const initialState = {
  blocks: blocks,
  filter: "SHOW_LATEST_5_BLOCKS"
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_BLOCKS':
      //console.log('requesting new blocks');
      return state;
    case 'RECEIVE_BLOCKS':
      //console.log('new blocks reveived');
      return {
        ...state,
        blocks: action.blocks
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};



export default appReducer;
