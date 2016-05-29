/**
 * @description Master script of reducer.
 */

import { combineReducers } from 'redux';
import musics from './music';
import upload from './upload';
import musicItemDisplay from './item-display';

const musicApp = combineReducers({ musics, upload, musicItemDisplay });

export default musicApp;
