/**
 * @description Store for Redux.
 */

import { createStore } from 'redux';
import todoApp from '../reducers/reducers';
import { addTodo, completeTodo, setVisibilityFilter } from '../actions/actions';
import { VisibilityFilters } from '../actions/action-types';

let store = createStore(todoApp);

// this is sample code
// remove it after
console.log(store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()) );

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
