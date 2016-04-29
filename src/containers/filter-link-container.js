/**
 * @description Container for filtering link.
 */

import { connect }             from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';
import Link                    from '../components/tutorial/link-component';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
