import 'babel-polyfill'
import _ from 'lodash'
import { expect } from 'chai'
import { isIndexed } from '../'
import Immutable from 'immutable'
import { primitives } from './values'
import { getType, setupTest } from './util'

describe('isIndexed:', function() {
  const testContext = setupTest()

  describe('should be indexed -', function() {
    const inputs = [
      [],
      [1, 2, 3],
      'abc',
      Immutable.List([]),
      Immutable.List([1, 2, 3]),
      Immutable.Stack([]),
      Immutable.Stack([1, 2, 3]),
      Immutable.Seq([]),
      Immutable.Seq([1, 2, 3])
    ]
    _.each(inputs, (input) => testIsIndexedReturnsTrue(input))
  })

  describe('should NOT be indexed -', function() {
    const inputs = primitives(testContext, ['booleans', 'nils', 'numbers', 'symbols'])
      .concat([
        () => {},
        function() {}
      ])

    _.each(inputs, (input) => testIsIndexedReturnsFalse(input))
  })
})

function testIsIndexedReturnsTrue(data) {
  it(`returns true for type ${getType(data)}`, function() {
    const result = isIndexed(data)
    expect(result).to.be.true
  })
}

function testIsIndexedReturnsFalse(data) {
  it(`returns false for type ${getType(data)}`, function() {
    const result = isIndexed(data)
    expect(result).to.be.false
  })
}
