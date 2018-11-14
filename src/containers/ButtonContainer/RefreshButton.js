import { connect } from 'react-redux';
import { Button } from '../../components/Button';

const mapDispatchToProps = (dispatch) => ({
  onClick: () =>  dispatch({type:"REQUEST_BLOCKS"})
});

const RefreshButton = connect(
  null,
  mapDispatchToProps
)(Button);

export default RefreshButton;
