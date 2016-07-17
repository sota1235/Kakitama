/**
 * @description Check do action names coincide.
 */

import assert     from 'assert';
import { uniq }   from 'lodash';
import * as types from 'actions/action-types';

describe('Check whethere action names are mapped twice', () => {
  it('Check all action names', () => {
    const typeNames = [];

    for (let key in types) {
      typeNames.push(types[key]);
    }

    const originLength = typeNames.length;
    const realLength   = uniq(typeNames).length;

    assert.equal(originLength, realLength);
  });
});
