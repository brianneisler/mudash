import _ from 'lodash'
import { expect } from 'chai'
//import Immutable from 'immutable'
import mudash from '../../../'

export default function reduceTests(methodName, { add, empties, isNpm, noop }) {

  const func = mudash[methodName]
  const array = [1, 2, 3]
  const isReduce = methodName == 'reduce'

  it('should reduce a collection to a single value', function() {

    const actual = func(['a', 'b', 'c'], (accumulator, value) => {
      return accumulator + value
    }, '')

    expect(actual).to.equal(isReduce ? 'abc' : 'cba')
  })

  it('should support empty collections without an initial `accumulator` value', function() {
    const actual = []
    const expected = _.map(empties, noop)

    _.each(empties, (value) => {
      try {
        actual.push(func(value, noop))
      } catch (e) {} //eslint-disable-line no-empty
    })

    expect(actual).to.deep.equal(expected)
  })

  it('should support empty collections with an initial `accumulator` value', function() {
    const expected = _.map(empties, _.constant('x'))

    const actual = _.map(empties, (value) => {
      try {
        return func(value, noop, 'x')
      } catch (e) {} //eslint-disable-line no-empty
    })

    expect(actual).to.deep.equal(expected)
  })

  it('should handle an initial `accumulator` value of `undefined`', function() {
    const actual = func([], noop, undefined)
    expect(actual).to.equal(undefined)
  })

  it('should return `undefined` for empty collections when no `accumulator` is given (test in IE > 9 and modern browsers)', function() {
    const array2 = []
    const object = { '0': 1, 'length': 0 }

    if ('__proto__' in array2) {
      array2.__proto__ = object
      expect(func(array2, noop)).to.equal(undefined)
    }
    expect(func(object, noop)).to.equal(undefined)
  })

  // it('should return an unwrapped value when implicitly chaining', function() {
  //   if (!isNpm) {
  //     assert.strictEqual(_(array)[methodName](add), 6)
  //   }
  // })

  it('should return a wrapped value when explicitly chaining', function() {
    if (!isNpm) {
      expect(mudash(array).chain()[methodName](add) instanceof mudash).to.be.true
    }
  })

  // it('uses the property shorthand', function() {
  //   const values = [
  //     {
  //       a: 1
  //     }
  //   ]
  //   const expected = 1
  //   const actual = func(values, 'a', undefined)
  //   expect(actual).to.equal(expected)
  // })
}
