/**
 * @description Logs all actions and states after they are dispatched.
 */

import 'babel-polyfill';
import { find }         from 'lodash';
import * as ActionNames from '../actions/action-types';
import AudioPlayer      from '../utils/audio';

const audio = new AudioPlayer;

const musicPlayer = store => next => async action => {
  if (action.type === ActionNames.CLICK_MUSIC_ITEM) {
    const targetId   = action.id;
    const targetPath = find(store.getState().musics, { id: targetId }).filePath;

    audio.stop();
    audio.play(targetPath);
  }

  return next(action);
};

export default musicPlayer;
