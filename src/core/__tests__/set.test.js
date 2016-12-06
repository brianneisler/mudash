import 'babel-polyfill'
import _ from 'lodash'
import { set } from '../'
import Immutable from 'immutable'
import { clone, expectImmutableChange, getType } from './util'

describe('set:', function() {

  describe('empty string prop -', function() {
    const inputs = [
      {},
      { a: 1 },
      { '': 2 },
      Immutable.Map({}),
      Immutable.Map({ a: 1 }),
      Immutable.Map({ '': 2 }),
      Immutable.OrderedMap({}),
      Immutable.OrderedMap({ a: 1 }),
      Immutable.OrderedMap({ '': 2 })
    ]
    const expecteds = [
      { '': 1 },
      { a: 1, '': 1 },
      { '': 1 },
      Immutable.Map({ '': 1 }),
      Immutable.Map({ a: 1, '': 1 }),
      Immutable.Map({ '': 1 }),
      Immutable.OrderedMap({ '': 1 }),
      Immutable.OrderedMap({ a: 1, '': 1 }),
      Immutable.OrderedMap({ '': 1 })
    ]
    _.each(inputs, (input, index) => testSetEmptyStringAsProp(input, clone(input), expecteds[index]))
  })

  describe('shallow prop -', function() {
    const inputs = [
      {},
      { a: 2 },
      { a: { b: 2 } },
      { b: 3 },
      Immutable.Map({}),
      Immutable.Map({ a: 2 }),
      Immutable.Map({ a: Immutable.Map({ b: 2 }) }),
      Immutable.Map({ b: 3 }),
      Immutable.OrderedMap({}),
      Immutable.OrderedMap({ a: 2 }),
      Immutable.OrderedMap({ a: Immutable.OrderedMap({ b: 2 }) }),
      Immutable.OrderedMap({ b: 3 })
    ]
    const expecteds = [
      { a: 1 },
      { a: 1 },
      { a: 1 },
      { b: 3, a: 1 },
      Immutable.Map({ a: 1 }),
      Immutable.Map({ a: 1 }),
      Immutable.Map({ a: 1 }),
      Immutable.Map({ b: 3, a: 1 }),
      Immutable.OrderedMap({ a: 1 }),
      Immutable.OrderedMap({ a: 1 }),
      Immutable.OrderedMap({ a: 1 }),
      Immutable.OrderedMap({ b: 3, a: 1 })
    ]
    _.each(inputs, (input, index) => testSetShallowProp(input, clone(input), expecteds[index]))
  })

  describe('deep prop -', function() {
    const inputs = [
      {},
      { a: 2 },
      { a: { b: 2 } },
      { b: 3 },
      Immutable.Map({}),
      Immutable.Map({ a: 2 }),
      Immutable.Map({ a: Immutable.Map({ b: 2 }) }),
      Immutable.Map({ b: 3 }),
      Immutable.OrderedMap({}),
      Immutable.OrderedMap({ a: 2 }),
      Immutable.OrderedMap({ a: Immutable.OrderedMap({ b: 2 }) }),
      Immutable.OrderedMap({ b: 3 })
    ]
    const expecteds = [
      { a: { b: 1 } },
      { a: { b: 1 } },
      { a: { b: 1 } },
      { b: 3, a: { b: 1 } },
      Immutable.Map({ a: { b: 1 } }),
      Immutable.Map({ a: { b: 1 } }),
      Immutable.Map({ a: { b: 1 } }),
      Immutable.Map({ b: 3, a: { b: 1 } }),
      Immutable.OrderedMap({ a: { b: 1 } }),
      Immutable.OrderedMap({ a: { b: 1 } }),
      Immutable.OrderedMap({ a: { b: 1 } }),
      Immutable.OrderedMap({ b: 3, a: { b: 1 } })
    ]
    _.each(inputs, (input, index) => testSetDeepProp(input, clone(input), expecteds[index]))
  })
})

function testSetEmptyStringAsProp(data, dataExpected, resultExpected) {
  it(`treats empty string as prop in ${getType(resultExpected)}`, function() {
    const result = set(data, '', 1)
    expectImmutableChange(data, result, dataExpected, resultExpected)
  })
}

function testSetShallowProp(data, dataExpected, resultExpected) {
  it(`sets shallow prop in ${getType(resultExpected)}`, function() {
    const result = set(data, 'a', 1)
    expectImmutableChange(data, result, dataExpected, resultExpected)
  })
}

function testSetDeepProp(data, dataExpected, resultExpected) {
  it(`sets deep prop in ${getType(resultExpected)}`, function() {
    const result = set(data, 'a.b', 1)
    expectImmutableChange(data, result, dataExpected, resultExpected)
  })
}
