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
});
