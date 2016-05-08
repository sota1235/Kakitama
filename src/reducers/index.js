/**
 * @description Master script of reducer.
 */

import { combineReducers } from 'redux';
import musics from './music';
import upload from './upload';

const musicApp = combineReducers({ musics, upload });

export default musicApp;
