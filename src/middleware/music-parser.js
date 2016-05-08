/**
 * @description Logs all actions and states after they are dispatched.
 */

import * as ActionNames from '../actions/action-types';
import { addMusic } from '../actions/actions';
import parseMusics from '../services/parse-music-file';

const musicParser = store => next => async action => {
  if (action.type === ActionNames.UPLOAD_MUSIC) {
    const uploadFiles = action.files;
    const parsedFiles = await parseMusics(uploadFiles);
    for (const index in parsedFiles) {
      let { songName, albumName, artistName } = parsedFiles[index];
      store.dispatch(addMusic(songName, albumName, artistName));
    }
  }

  return next(action);
};

export default musicParser;
