import 'babel-polyfill'
import _ from 'lodash'
import { expect } from 'chai'
import Immutable from 'immutable'
import { includes } from '../'
import mudash from '../../'
import { setupTest, toArgs } from './util'

describe('includes', function() {

  const context = setupTest()

  const inputs = {
    'an `arguments` object': toArgs([1, 2, 3]),
    'an array': [1, 2, 3],
    'an object': { a:1, b:2, c:3 },
    'a string': 'abc',
    'an Immutable.List': Immutable.List([1, 2, 3]),
    'an Immutable.Set': Immutable.Set([1, 2, 3]),
    'an Immutable.Map': Immutable.Map({ a:1, b:2, c:3 }),
    'an Immutable.OrderedMap': Immutable.OrderedMap({ a:1, b:2, c:3 }),
    'an Immutable.OrderedSet': Immutable.OrderedSet([1, 2, 3]),
    'an Immutable.Stack': Immutable.Stack([1, 2, 3]),
    'an Immutable.Seq from array': Immutable.Seq([1, 2, 3]),
    'an Immutable.Seq from object': Immutable.Seq({ a:1, b:2, c:3 })
  }
  _.each(inputs, (input, displayName) => {
    testWithPositiveFromIndexAndExistingValue(input, displayName)
    testWithPositiveFromIndexAndNotExistingValue(input, displayName)
    testWithPositiveFromIndexAndExistingValueBeforeFromIndex(input, displayName)
    testWithFromIndexGreaterThanLength(input, displayName)
    testFalseyFromIndexes(input, displayName, context)
    testFromIndexIntegerCoercion(input, displayName, context)
    testNegativeFromIndex(input, displayName)
    testNegativeFromIndexLessThanEqualToNegativeLength(input, displayName, context)
  })
})

function testWithPositiveFromIndexAndExistingValue(data, displayName) {
  it(`should return true with ${displayName} and a positive 'fromIndex' where value exists`, function() {
    const values = mudash.toArray(data)
    const actual = includes(data, values[2], 2)
    expect(actual).to.be.true
  })
}

function testWithPositiveFromIndexAndNotExistingValue(data, displayName) {
  it(`should return false with ${displayName} and a positive 'fromIndex' where value does NOT exist`, function() {
    const actual = includes(data, 'z', 2)
    expect(actual).to.be.false
  })
}

function testWithPositiveFromIndexAndExistingValueBeforeFromIndex(data, displayName) { //eslint-disable-line id-length
  it(`should return false with ${displayName} and a positive 'fromIndex' where value exists but is before fromIndex`, function() {
    const values = mudash.toArray(data)
    const actual = includes(data, values[1], 2)
    expect(actual).to.be.false
  })
}

function testWithFromIndexGreaterThanLength(data, displayName) {
  const fromIndexes = [4, 6, Math.pow(2, 32), Infinity]
  const values = mudash.toArray(data)
  it(`should return false with ${displayName} and a 'fromIndex' > 'length' with value that exists`, function() {
    _.each(fromIndexes, (fromIndex) => {
      const actual = includes(data, values[1], fromIndex)
      expect(actual).to.be.false
    })
  })

  it(`should return false with ${displayName} and a 'fromIndex' > 'length' with value that does NOT exist`, function() {
    _.each(fromIndexes, (fromIndex) => {
      const actual = includes(data, 'z', fromIndex)
      expect(actual).to.be.false
    })
  })

  it(`should return false with ${displayName} and a 'fromIndex' > 'length' with undefined value`, function() {
    _.each(fromIndexes, (fromIndex) => {
      const actual = includes(data, undefined, fromIndex)
      expect(actual).to.be.false
    })
  })
}

function testFalseyFromIndexes(data, displayName, { falsey }) {
  const values = mudash.toArray(data)
  it(`should return true with ${displayName} where value exists and falsey 'fromIndex' is treated as 0`, function() {
    _.each(falsey, (falseValue) => {
      const actual = includes(data, values[0], falseValue)
      expect(actual).to.be.true
    })
  })
}

function testFromIndexIntegerCoercion(data, displayName, { NaN }) {
  const values = mudash.toArray(data)
  it(`should return true with ${displayName} where value exists and coerce decimal 'fromIndex' to an integer`, function() {
    const actual = includes(data, values[0], 0.1)
    expect(actual).to.be.true
  })

  it(`should return true with ${displayName} where value exists and coerce NaN 'fromIndex' to an integer`, function() {
    const actual = includes(data, values[0], NaN)
    expect(actual).to.be.true
  })

  it(`should return true with ${displayName} where value exists and coerce string 'fromIndex' to an integer`, function() {
    const actual = includes(data, values[0], '0')
    expect(actual).to.be.true
  })

  it(`should return false with ${displayName} where value exists and coerce string 'fromIndex' to an integer that is beyond the range of value`, function() {
    const actual = includes(data, values[0], '1')
    expect(actual).to.be.false
  })
}

function testNegativeFromIndex(data, displayName) {
  const values = mudash.toArray(data)
  it(`should return true with ${displayName} where value exists and negative 'fromIndex' is within range`, function() {
    const actual = includes(data, values[2], -1)
    expect(actual).to.be.true
  })

  it(`should return false with ${displayName} where value exists and negative 'fromIndex' is beyond the range of value`, function() {
    const actual = includes(data, values[1], -1)
    expect(actual).to.be.false
  })
}

function testNegativeFromIndexLessThanEqualToNegativeLength(data, displayName, { Infinity }) {
  const values = mudash.toArray(data)
  const indexes = [-4, -6, -Infinity]

  it(`should return true with ${displayName} where value exists and and a negative 'fromIndex' <= '-length'`, function() {
    _.each(indexes, (index) => {
      const actual = includes(data, values[0], index)
      expect(actual).to.be.true
    })
  })
}
