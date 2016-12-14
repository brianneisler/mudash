import 'babel-polyfill'
import { expect } from 'chai'
import { dropRightWhile } from '../'
import Immutable from 'immutable'

describe('dropRightWhile', function () {

  it('should drop elements in an array from the end until `predicate` returns falsey', function () {
    const array = [1, 2, 3, 4]
    const result = dropRightWhile(array, function (n) { return n > 2 })
    expect(result).not.to.equal(array) // expect new array
    expect(array).to.deep.equal([1, 2, 3, 4]) // expect no modify array
    expect(result).to.deep.equal([1, 2])
  })

  it('should drop immutable data in a list from the end until `predicate` returns falsey', function () {
    const list = Immutable.fromJS([1, 2, 3, 4])
    const result = dropRightWhile(list, function (n) { return n > 2})
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS(result)).to.deep.equal([1, 2])
  })
})
