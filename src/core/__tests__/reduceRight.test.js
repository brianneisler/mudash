import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { reduceRight } from '../'
import { reduceTests } from './shared'
import { setupTest } from './util'

describe('reduceRight', function() {

  const testContext = setupTest()
  const {
    slice
  } = testContext

  const array = [1, 2, 3]

  it('should use the last element of a collection as the default `accumulator`', function() {
    expect(reduceRight(array)).to.equal(3)
  })

  it('should provide correct `iteratee` arguments when iterating an array', function() {

    let args

    reduceRight(array, function() {
      args = args || slice.call(arguments)
    }, 0)

    expect(args).to.deep.equal([0, 3, 2, array])

    args = undefined
    reduceRight(array, function() {
      args = args || slice.call(arguments)
    })

    expect(args).to.deep.equal([3, 2, 1, array])
  })

  it('should provide correct `iteratee` arguments when iterating an object', function() {

    let args
    const object = { 'a': 1, 'b': 2 }
    const isFIFO = _.keys(object)[0] == 'a'

    let expected = isFIFO
      ? [0, 2, 'b', object]
      : [0, 1, 'a', object]

    reduceRight(object, function() {
      args = args || slice.call(arguments)
    }, 0)

    expect(args).to.deep.equal(expected)

    args = undefined
    expected = isFIFO
      ? [2, 1, 'a', object]
      : [1, 2, 'b', object]

    reduceRight(object, function() {
      args = args || slice.call(arguments)
    })

    expect(args).to.deep.equal(expected)
  })

  reduceTests('reduceRight', testContext)
})
