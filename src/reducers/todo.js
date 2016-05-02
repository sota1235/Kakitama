/**
 * @description Reducer for changing todo state.
 */

import * as ActionNames from '../actions/action-types';

/**
 * @description Change state for todo.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} state
 */
const todo = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ActionNames.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case ActionNames.COMPLETE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });
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
        todo(undefined, action),
      ];
    case ActionNames.COMPLETE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
