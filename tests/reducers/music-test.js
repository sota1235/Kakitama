/**
 * @description Unit tests for src/reducers/music.js
 */

import assert     from 'assert';
import reducer    from 'reducers/music';
import * as types from 'actions/action-types';

describe('reducers/music.js test', () => {
  it('Should return default state.', () => {
    const expected = [];

    assert.deepEqual(expected, reducer(undefined, {}));
  });

  it('Should threw action', () => {
    const state = [
      'song-data1', 'song-data2',
    ];

    assert.deepEqual(state, reducer(state, {}));
  });

  it('Should add musics(State is still empty or undefined).', () => {
    const action = {
      type       : types.ADD_MUSIC,
      id         : 1235,
      songName   : 'song-name',
      albumName  : 'album-name',
      artistName : 'artist-name',
      filePath   : 'file-path',
    };
    const expected = [
      {
        id         : action.id,
        songName   : action.songName,
        albumName  : action.albumName,
        artistName : action.artistName,
        filePath   : action.filePath,
      },
    ];

    assert.deepEqual(expected, reducer(undefined, action));
    assert.deepEqual(expected, reducer([], action));
  });

  it('Should add musics(some musics are already added to state).', () => {
    const state = [
      'song-data-1',
      'song-data-2',
    ];
    const action = {
      type       : types.ADD_MUSIC,
      id         : 1235,
      songName   : 'song-name',
      albumName  : 'album-name',
      artistName : 'artist-name',
      filePath   : 'file-path',
    };
    const expected = [
      ...state,
      {
        id         : action.id,
        songName   : action.songName,
        albumName  : action.albumName,
        artistName : action.artistName,
        filePath   : action.filePath,
      },
    ];

    assert.deepEqual(expected, reducer(state, action));
  });
});
