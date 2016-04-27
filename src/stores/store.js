/**
 * @description Store for Redux.
 */

import { createStore } from 'redux';
import todoApp from '../reducers/reducers';

let store = createStore(todoApp);
