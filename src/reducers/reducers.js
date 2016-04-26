/**
 * @description Reducer for Redux.
 */

import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/action-types';

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

/**
 * @description Make state of todo list.
 * @param {Array} state
 * @param {Object} action
 * @return {Array}
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text     : action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoApp = combineReducers({
  VisibilityFilter, todos
})
