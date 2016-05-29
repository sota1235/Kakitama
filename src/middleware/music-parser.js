/**
 * @description Logs all actions and states after they are dispatched.
 */

import 'babel-polyfill';
import * as ActionNames from '../actions/action-types';
import { addMusic } from '../actions/actions';
import parseMusics from '../services/parse-music-file';

const musicParser = store => next => async action => {
  if (action.type === ActionNames.UPLOAD_MUSIC) {
    const uploadFiles = action.files;
    const parsedFiles = await parseMusics(uploadFiles);
    for (let i = 0; i < parsedFiles.length; i++) {
      const { songName, albumName, artistName, filePath } = parsedFiles[i];
      store.dispatch(addMusic(songName, albumName, artistName, filePath));
    }
  }

  return next(action);
};

export default musicParser;
