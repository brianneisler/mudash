import 'babel-polyfill'
import _ from 'lodash'
import { expect } from 'chai'
import { isIterable } from '../'
import Immutable from 'immutable'
import { primitives } from './shared'
import {  getType, setupTest } from './util'

describe('isIterable:', function() {
  const testContext = setupTest()

  describe('should be iterable -', function() {
    const inputs = [
      {},
      { a: 1 },
      [],
      [1, 2, 3],
      'abc',
      Immutable.List([]),
      Immutable.List([1, 2, 3]),
      Immutable.Set([]),
      Immutable.Set([1, 2, 3]),
      Immutable.Map({}),
      Immutable.Map({ a:1, b:2, c:3 }),
      Immutable.OrderedMap({ a:1, b:2, c:3 }),
      Immutable.OrderedSet([]),
      Immutable.OrderedSet([1, 2, 3]),
      Immutable.Stack([]),
      Immutable.Stack([1, 2, 3]),
      Immutable.Seq([]),
      Immutable.Seq([1, 2, 3]),
      Immutable.Seq({}),
      Immutable.Seq({ a:1, b:2, c:3 })
    ]
    _.each(inputs, (input) => testIsIterableReturnsTrue(input))
  })

  describe('should NOT be iterable -', function() {
    const inputs = primitives(testContext, ['booleans', 'nils', 'numbers', 'symbols'])
    _.each(inputs, (input) => testIsIterableReturnsFalse(input))
  })
})

function testIsIterableReturnsTrue(data) {
  it(`returns true for type ${getType(data)}`, function() {
    const result = isIterable(data)
    expect(result).to.be.true
  })
}

function testIsIterableReturnsFalse(data) {
  it(`returns false for type ${getType(data)}`, function() {
    const result = isIterable(data)
    expect(result).to.be.false
  })
}
