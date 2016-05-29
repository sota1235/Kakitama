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
 * @param {string} filePath
 * @return {Object}
 */
export function addMusic(songName, albumName, artistName, filePath) {
  let id = sha256(`${songName}${albumName}${artistName}${filePath}`);
  return {
    type: ActionNames.ADD_MUSIC,
    id: sha256(`${songName}${albumName}${artistName}`),
    songName, albumName, artistName, filePath,
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

/**
 * @description Dispatch change display action of music item.
 * @param {string} id
 * @return {Object}
 */
export function enableMusicItem(id) {
  return {
    type: ActionNames.CLICK_MUSIC_ITEM,
    id,
  };
}
