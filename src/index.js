/**
 * @description For index page.
 */
import React        from 'react';
import { render }   from 'react-dom';
import AppComponent from './components/app-component';
import './stores/store';

render(
  <AppComponent />,
  document.getElementById('app-mount-space')
);
