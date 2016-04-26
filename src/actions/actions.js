/**
 * @description Action creators file for Redux.
 */

import * as ActionNames from './action-types';

/**
 * @description Dispatch adding TODO action.
 * @param {string} text
 * @return {Object}
 */
export function addTodo(text) {
  return { type: ActionNames.ADD_TODO, text };
}

/**
 * @description Dispatch completing TODO action.
 * @param {number} index
 * @return {Object}
 */
export function completeTod(index) {
  return { type: ActionNames.COMPLETE_TODO, index };
}

/**
 * @description Dispatch setting visibility status action.
 * @param {string} filter
 * @return {Object}
 */
export function setVisibiltyFilter(filter) {
  return { type: ActionNames.SET_VISIBILITY_FILTER, filter };
}
