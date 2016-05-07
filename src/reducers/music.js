/**
 * @description Reducer for changing music state.
 */

import * as ActionNames from '../actions/action-types';

/**
 * @description Change state of music.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} state
 */
const music = (state, action) => {
  switch (action.type) {
    case ActionNames.ADD_MUSIC:
      return {
        id: action.id,
        songName: action.songName,
        albumName: action.albumName,
        artistName: action.artistName,
      };
    default:
      return state;
  }
};

/**
 * @description Make state of music list.
 * @param {Array} state
 * @param {Object} action
 * @return {Array}
 */
const musics = (state = [], action) => {
  switch (action.type) {
    case ActionNames.ADD_MUSIC:
      return [
        ...state,
        music(undefined, action),
      ];
    default:
      return state;
  }
};

export default musics;
