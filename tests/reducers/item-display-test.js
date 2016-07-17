/**
 * @description Unit tests for src/reducers/item-display.js
 */

import assert     from 'assert';
import reducer    from 'reducers/item-display';
import * as types from 'actions/action-types';

describe('reducers/item-display.js test', () => {
  it('Should return default state.', () => {
    const expected = [];

    assert.deepEqual(expected, reducer(undefined, {}));
  });

  it('Should handle CLICK_MUSIC_ITEM', () => {
    const action = {
      type     : types.CLICK_MUSIC_ITEM,
      id       : 1235,
      songName : 'song-name',
    };
    const expected = {
      id       : action.id,
      songName : action.songName,
    };

    assert.deepEqual(expected, reducer([], action));
  });

  it('Should override state when CLICK_MUSIC_ITEM', () => {
    const state = [
      {
        id       : 1236,
        songName : 'another-song-name',
      }
    ];
    const action = {
      type     : types.CLICK_MUSIC_ITEM,
      id       : 1235,
      songName : 'song-name',
    };
    const expected = {
      id       : action.id,
      songName : action.songName,
    };

    assert.deepEqual(expected, reducer(state, action));
  });
});
