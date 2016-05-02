/**
 * @description Action creators file for Redux.
 */

import * as ActionNames from './action-types';

/** @type {number} auto increment number for todo list. */
let nextTodoId = 0;

/**
 * @description Dispatch adding TODO action.
 * @param {string} text
 * @return {Object}
 */
export function addTodo(text) {
  return {
    type: ActionNames.ADD_TODO,
    id: nextTodoId++,
    text,
  };
}

/**
 * @description Dispatch completing TODO action.
 * @param {number} index
 * @return {Object}
 */
export function completeTodo(id) {
  return { type: ActionNames.COMPLETE_TODO, id };
}

/**
 * @description Dispatch setting visibility status action.
 * @param {string} filter
 * @return {Object}
 */
export function setVisibilityFilter(filter) {
  return { type: ActionNames.SET_VISIBILITY_FILTER, filter };
}
