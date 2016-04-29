/**
 * @description Root component.
 */

import React           from 'react';
import Footer          from './footer-component';
import AddTodo         from '../../containers/add-todo-container';
import VisibleTodoList from '../../containers/visible-todo-list-container';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
