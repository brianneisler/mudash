import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { reduce } from '../'
import { reduceTests } from './shared'
import { setupTest } from './util'

describe('reduce', function() {

  const testContext = setupTest()
  const {
    slice
  } = testContext

  const array = [1, 2, 3]

  it('should use the first element of a collection as the default `accumulator`', function() {
    expect(reduce(array)).to.equal(1)
  })

  it('should provide correct `iteratee` arguments when iterating an array', function() {

    let args

    reduce(array, function() {
      args = args || slice.call(arguments)
    }, 0)

    expect(args).to.deep.equal([0, 1, 0, array])

    args = undefined
    reduce(array, function() {
      args = args || slice.call(arguments)
    })

    expect(args).to.deep.equal([1, 2, 1, array])
  })

  it('should provide correct `iteratee` arguments when iterating an object', function() {
    let args
    const object = { 'a': 1, 'b': 2 }
    const firstKey = _.head(_.keys(object))

    let expected = firstKey == 'a'
      ? [0, 1, 'a', object]
      : [0, 2, 'b', object]

    reduce(object, function() {
      args = args || slice.call(arguments)
    }, 0)

    expect(args).to.deep.equal(expected)

    args = undefined
    expected = firstKey == 'a'
      ? [1, 2, 'b', object]
      : [2, 1, 'a', object]

    reduce(object, function() {
      args = args || slice.call(arguments)
    })

    expect(args).to.deep.equal(expected)
  })

  reduceTests('reduce', testContext)
})
