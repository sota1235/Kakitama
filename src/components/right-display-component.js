/**
 * @description 右メイン画面
 */

import React from 'react';
import Footer from './footer-component';
import AddTodo from '../containers/add-todo-container';
import VisibleTodoList from '../containers/visible-todo-list-container';
import MusicList from '../containers/music-list-container';

const RightDisplay = () => (
  <div style={{paddingLeft: 256}}>
    <AddTodo />
    <VisibleTodoList />
    <MusicList />
    <Footer />
  </div>
);

export default RightDisplay;
