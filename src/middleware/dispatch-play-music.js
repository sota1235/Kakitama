/**
 * @description Dispatch playing music event for some actions.
 */

import * as ActionNames from '../actions/action-types';
import { playMusic } from '../actions/actions';

const dispatchPlayMusic = store => next => action => {
  // If the action is CLICK_MUSIC_ITEM
  if (action.type === ActionNames.CLICK_MUSIC_ITEM) {
    store.dispatch(playMusic(action.id, action.songName));
  }

  return next(action);
};

export default dispatchPlayMusic;
