/**
 * @description Play music when some action dispatched.
 */

import 'babel-polyfill';
import { find }         from 'lodash';
import * as ActionNames from '../actions/action-types';
import AudioPlayer      from '../utils/audio';

const audio = new AudioPlayer;

const musicPlayer = store => next => async action => {
  if (action.type === ActionNames.START_PLAYING_MUSIC) {
    const targetId   = action.id;
    const targetPath = find(store.getState().musics, { id: targetId }).filePath;

    audio.stop();
    audio.play(targetPath);
  }

  return next(action);
};

export default musicPlayer;
