/**
 * @description Reducer for uploading music state.
 */

import * as ActionNames from '../actions/action-types';

/**
 * @description Make state of music list.
 * @param {Array} state
 * @param {Object} action
 * @return {Array}
 */
const uploadMusics = (state = [], action) => {
  switch (action.type) {
    case ActionNames.UPLOAD_MUSIC:
      return state;
    default:
      return state;
  }
};

export default uploadMusics;
