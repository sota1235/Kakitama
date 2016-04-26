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
