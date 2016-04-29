/**
 * @description Reducer for visibility of todo.
 */

import { VisibilityFilters } from '../constants';

const { SHOW_ALL, SET_VISIBILITY_FILTER } = VisibilityFilters;

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
