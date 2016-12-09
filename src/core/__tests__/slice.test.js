import 'babel-polyfill'
import _ from 'lodash'
import { slice } from '../'
import Immutable from 'immutable'
import { clone, expectAllExactEqual, getType } from './util'

describe('slice', function() {
  const inputs = [
    null,
    undefined,
    123,
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

  _.each(inputs, (input) => testSliceDefaultParamsReturnsExisting(input, clone(input)))
  _.each(inputs, (input) => testSliceStartingAt0ReturnsExisting(input, clone(input)))
})

function testSliceDefaultParamsReturnsExisting(data, expected) {
  it(`default params returns existing ${getType(expected)}`, function() {
    const result = slice(data)
    expectAllExactEqual(data, result, expected)
  })
}

function testSliceStartingAt0ReturnsExisting(data, expected) {
  it(`starting at 0 returns existing ${getType(expected)}`, function() {
    const result = slice(data, 0)
    expectAllExactEqual(data, result, expected)
  })
}
