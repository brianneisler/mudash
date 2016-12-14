import 'babel-polyfill'
import { expect } from 'chai'
import { dropRight } from '../'
import Immutable from 'immutable'

describe('dropRight', function () {

  it('should drop the last two elements in a mutatable array', function () {
    const array = [1, 2, 3]
    const result = dropRight(array, 2)
    expect(result).not.to.equal(array) // expect new array
    expect(array).to.deep.equal([1, 2, 3]) // expect no modify array
    expect(result).to.deep.equal([1])
  })

  it('should drop the last two elements in an immutable list', function () {
    const list = Immutable.fromJS([1, 2, 3])
    const result = dropRight(list, 2)
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS()).to.deep.equal([1])
  })

  it('should return all values if n < 1', function () {
    const list = Immutable.fromJS([1, 2, 3])
    const result = dropRight(list, 0)
    expect(result.toJS()).to.deep.equal([1, 2, 3])
  })

  it('should drop the last element if n is undefined', function () {
    const list = Immutable.fromJS([1, 2, 3])
    const result = dropRight(list, undefined)
    expect(result.toJS()).to.deep.equal([1, 2])
  })
})
