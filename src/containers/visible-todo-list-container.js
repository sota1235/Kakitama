/**
 * @description Container for visibility for todo list.
 */

import { connect }           from 'react-redux';
import { VisibilityFilters } from '../constants';
import { completeTodo }      from '../actions/actions';
import TodoList              from '../components/tutorial/todo-list-component';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const getVisibleTodos = (todos, filter) => {
  switch (filename) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter( t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter( t => !t.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(completeTodo(id))
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
