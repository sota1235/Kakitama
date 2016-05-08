/**
 * @description Logs all actions and states after they are dispatched.
 */

import * as ActionNames from '../actions/action-types';
import parseMusics from '../services/parse-music-file';

let musicKey = 0;

const musicParser = store => next => async action => {
  if (action.type === ActionNames.UPLOAD_MUSIC) {
    const uploadFiles = action.files;
    const parsedFiles = await parseMusics(uploadFiles);
    console.log('Parse music files', parsedFiles);
    store.dispatch({
      type: ActionNames.ADD_MUSIC,
      id: musicKey++,
      songName: parsedFiles[0].songName,
      albumName: parsedFiles[0].albumName,
      artistName: parsedFiles[0].artistName,
    });
  }

  return next(action);
};

export default musicParser;
