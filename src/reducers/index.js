/**
 * @description Master script of reducer.
 */

import { combineReducers } from 'redux';
import todos from './todo';
import visibilityFilter from './visibility-filter';

const todoApp = combineReducers({
  todos, visibilityFilter,
});

export default todoApp;
