import 'babel-polyfill'
import { expect } from 'chai'
import { pop } from '../'
import Immutable from 'immutable'

describe('pop', function() {

  it('pops from empty mutable array', function() {
    const array = []
    const result = pop(array)
    expect(result).to.equal(array) //expect same array when no change
    expect(result).to.deep.equal([]) //do not modify array
  })

  it('pops from empty Immutable.List', function() {
    const list = Immutable.List([])
    const result = pop(list)
    expect(Immutable.List.isList(result)).to.be.true
    expect(list.toJS()).to.deep.equal([])
    expect(result.toJS()).to.deep.equal([])
  })

  it('pops from mutable array with 1 item', function() {
    const array = [1]
    const result = pop(array)
    expect(result).to.not.equal(array) //expect different array when change
    expect(array).to.deep.equal([1]) //do not modify array
    expect(result).to.deep.equal([])
  })

  it('pops from Immutable.List with 1 item', function() {
    const list = Immutable.List([1])
    const result = pop(list)
    expect(Immutable.List.isList(result)).to.be.true
    expect(list.toJS()).to.deep.equal([1])
    expect(result.toJS()).to.deep.equal([])
  })

  it('pops from mutable array with multiple items', function() {
    const array = [1, 2, 3]
    const result = pop(array)
    expect(result).to.not.equal(array) //expect different array when change
    expect(array).to.deep.equal([1, 2, 3]) //do not modify array
    expect(result).to.deep.equal([1, 2])
  })

  it('pops from Immutable.List with multiple items', function() {
    const list = Immutable.List([1, 2, 3])
    const result = pop(list)
    expect(Immutable.List.isList(result)).to.be.true
    expect(list.toJS()).to.deep.equal([1, 2, 3])
    expect(result.toJS()).to.deep.equal([1, 2])
  })
})
