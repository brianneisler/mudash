import 'babel-polyfill'
import { expect } from 'chai'
import { dropWhile } from '../'
import Immutable from 'immutable'

describe('dropWhile', function () {

  it('should drop elements in an array until `predicate` returns falsey', function () {
    const array = [1, 2, 3, 4]
    const result = dropWhile(array, function (n) { return n % 2 })
    expect(result).not.to.equal(array) // expect new array
    expect(array).to.deep.equal([1, 2, 3, 4]) // expect no modify array
    expect(result).to.deep.equal([2, 3, 4])
  })

  it('should drop immutable data in a list until `predicate` returns falsey', function () {
    const list = Immutable.fromJS([1, 2, 3, 4])
    const result = dropWhile(list, function (n) { return n % 2 })
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS(result)).to.deep.equal([2, 3, 4])
  })

  it('should `_.match` iteratee shorthand', function () {
    const array = [ { 'a': 1 }, { 'a': 0 }, { 'b': 0 }]
    const result = dropWhile(array, { 'a': 1 })
    expect(result).to.deep.equal([{ 'a': 0 }, { 'b': 0 }])
  })

  it('should `_.matchProperty` iteratee shorthand', function () {
    const array = [ { 'a': 0 }, { 'a': 1 }, { 'b': 0 }]
    const result = dropWhile(array, ['a', 0])
    expect(result).to.deep.equal([ { 'a': 1 }, { 'b': 0 } ])
  })

  it('should `_.property` iteratee shorthand', function () {
    const array = [ { 'a': 1 }, { 'a': 0 }, { 'b': 0 }]
    const result = dropWhile(array, 'a')
    expect(result).to.deep.equal([ { 'a': 0 } , { 'b': 0 } ])
  })
})
