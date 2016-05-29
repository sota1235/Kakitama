/**
 * @description Reducer for music item display status.
 */

import * as ActionNames from '../actions/action-types';

/**
 * @description Display status of music item.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} state
 */
const musicItemDisplay = (state = [], action) => {
  switch (action.type) {
    case ActionNames.CLICK_MUSIC_ITEM:
      return {
        id: action.id,
      };
    default:
      return state;
  };
};

export default musicItemDisplay;
