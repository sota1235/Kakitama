/**
 * @description Action creators file for Redux.
 */

import * as ActionNames from './action-types';

/** @type {number} auto increment number for todo list. */
let nextMusicId = 0;

/**
 * @description Dispatch adding music action.
 * @param {string} songName
 * @param {string} albumName
 * @param {string} artistName
 * @return {Object}
 */
export function addMusic(songName, albumName, artistName) {
  return {
    type: ActionNames.ADD_MUSIC,
    id: nextMusicId++,
    songName, albumName, artistName,
  };
}

/**
 * @description Dispatch adding music action.
 * @param {Array} file
 * @return {Object}
 */
export function uploadMusics(files) {
  return {
    type: ActionNames.UPLOAD_MUSIC,
    files,
  };
}
