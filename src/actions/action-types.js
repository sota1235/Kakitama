/**
 * @description Action types for app.
 */

/**
 * @description Adding todo.
 * @type {string}
 */
export const ADD_TODO = 'ADD_TODO';

/**
 * @description Complete todo.
 * @type {string}
 */
export const COMPLETE_TODO = 'COMPLETE_TOD';

/**
 * @description Visible todo.
 * @type {string}
 */
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * @description Constants for visibility status.
 * @type {Object}
 */
export const VisibilityFilters = {
  SHOW_ALL       : 'SHOW_ALL',
  SHOW_COMPLETED : 'SHOW_COMPLETED',
  SHOW_ACTIVE    : 'SHOW_ACTIVE'
}
