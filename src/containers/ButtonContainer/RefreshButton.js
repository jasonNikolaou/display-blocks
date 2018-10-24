import { connect } from 'react-redux';
import { Button } from '../../components/Button';
import { fetchBlocks } from '../../store';

const mapDispatchToProps = (dispatch) => ({
  onClick: () =>  dispatch(fetchBlocks())
});

const RefreshButton = connect(
  null,
  mapDispatchToProps
)(Button);

export default RefreshButton;
