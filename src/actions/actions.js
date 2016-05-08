/**
 * @description Action creators file for Redux.
 */

import * as ActionNames from './action-types';
import sha256 from 'sha256';

/**
 * @description Dispatch adding music action.
 * @param {string} songName
 * @param {string} albumName
 * @param {string} artistName
 * @return {Object}
 */
export function addMusic(songName, albumName, artistName) {
  let id = sha256(`${songName}${albumName}${artistName}`);
  console.log(id);
  return {
    type: ActionNames.ADD_MUSIC,
    id: sha256(`${songName}${albumName}${artistName}`),
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
