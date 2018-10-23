import { connect } from 'react-redux';
import { Button } from '../../components/Button';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch({type: 'SET_FILTER', filter: ownProps.filter})
  }
};
const ButtonContainer = connect(
  null,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
