/**
 * @description Master script of reducer.
 */

import { combineReducers } from 'redux';
import musics from './music';

const musicApp = combineReducers({ musics });

export default musicApp;
