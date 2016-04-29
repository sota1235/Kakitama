/**
 * @description Reducer for Redux.
 */

import { combineReducers }   from 'redux';
import * as ActionNames      from '../actions/action-types';
import { VisibilityFilters } from '../constants';

const { SHOW_ALL } = VisibilityFilters;

/**
 * @description Get state for visibility of todo list.
 * @param {string} state
 * @param {Object} action
 * @return {string}
 */
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case ActionNames.SET_VISIBILITY_FILTER:
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
    case ActionNames.ADD_TODO:
      return [
        ...state,
        {
          text     : action.text,
          completed: false
        }
      ];
    case ActionNames.COMPLETE_TODO:
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

const todoApp = combineReducers({
  visibilityFilter, todos
});

export default todoApp;
