import { connect } from 'react-redux';
import { Button } from '../../components/Button';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({type: 'SET_FILTER', filter: ownProps.filter})
});

const FilteredButton = connect(
  null,
  mapDispatchToProps
)(Button);

export default FilteredButton;
