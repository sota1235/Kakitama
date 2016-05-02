/**
 * @description Reducer for visibility of todo.
 */

import { VisibilityFilters } from '../constants';
import { SET_VISIBILITY_FILTER } from '../actions/action-types';

const { SHOW_ALL } = VisibilityFilters;

/**
 * @description Get state for visibility of todo list.
 * @param {string} state
 * @param {Object} action
 * @return {string}
 */
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
