import 'babel-polyfill'
import { expect } from 'chai'
import { drop } from '../'
import Immutable from 'immutable'

describe('drop', function () {

  it('should drop the first two elements in a mutatable array', function () {
    const array = [1, 2, 3]
    const result = drop(array, 2)
    expect(result).not.to.equal(array) // expect new array
    expect(array).to.deep.equal([1, 2, 3]) // expect no modify array
    expect(result).to.deep.equal([3])
  })

  it('should drop the first two elements in an immutable list', function () {
    const list = Immutable.fromJS([1, 2, 3])
    const result = drop(list, 2)
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS()).to.deep.equal([3])
  })

  it('should return all values if n < 1', function () {
    const list = Immutable.fromJS([1, 2, 3])
    const result = drop(list, 0)
    expect(result.toJS()).to.deep.equal([1, 2, 3])
  })

  it('should drop the first element if n is undefined', function () {
    const list = Immutable.fromJS([1, 2, 3])
    const result = drop(list, undefined)
    expect(result.toJS()).to.deep.equal([2, 3])
  })
})
