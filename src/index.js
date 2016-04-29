/**
 * @description For index page.
 */
import React           from 'react';
import { render }      from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import todoApp         from './reducers/index';
import App             from './components/tutorial/app-component';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-mount-space')
);
