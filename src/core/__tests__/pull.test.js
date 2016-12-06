import 'babel-polyfill'
import { expect } from 'chai'
import { pull } from '../'
import Immutable from 'immutable'

describe('pull', function() {

  it('pulls from empty mutable array', function() {
    const array = []
    const result = pull(array, 'a')
    expect(result).to.equal(array) //expect same array when no change
    expect(result).to.deep.equal([]) //do not modify array
  })

  it('pulls from empty Immutable.List', function() {
    const list = Immutable.List([])
    const result = pull(list, 'a')
    expect(Immutable.List.isList(result)).to.be.true
    expect(result).to.equal(list)
    expect(list.toJS()).to.deep.equal([])
    expect(result.toJS()).to.deep.equal([])
  })

  it('does not modify mutable array with no matching items', function() {
    const array = ['a']
    const result = pull(array, 'b')
    expect(result).to.equal(array) //expect same array when no change
    expect(array).to.deep.equal(['a']) //do not modify array
    expect(result).to.deep.equal(['a'])
  })

  it('does not modify Immutable.List with no matching items', function() {
    const list = Immutable.List(['a'])
    const result = pull(list, 'b')
    expect(Immutable.List.isList(result)).to.be.true
    expect(result).to.equal(list) //expect same array when no change
    expect(list.toJS()).to.deep.equal(['a'])
    expect(result.toJS()).to.deep.equal(['a'])
  })

  it('does not modify mutable array with empty items', function() {
    const array = ['a']
    const result = pull(array)
    expect(result).to.equal(array) //expect same array when no change
    expect(array).to.deep.equal(['a']) //do not modify array
    expect(result).to.deep.equal(['a'])
  })

  it('does not modify Immutable.List with empty items', function() {
    const list = Immutable.List(['a'])
    const result = pull(list)
    expect(Immutable.List.isList(result)).to.be.true
    expect(result).to.equal(list) //expect same array when no change
    expect(list.toJS()).to.deep.equal(['a'])
    expect(result.toJS()).to.deep.equal(['a'])
  })

  it('pulls from mutable array with 1 matching item', function() {
    const array = ['a']
    const result = pull(array, 'a')
    expect(result).to.not.equal(array) //expect different array when change
    expect(array).to.deep.equal(['a']) //do not modify array
    expect(result).to.deep.equal([])
  })

  it('pulls from Immutable.List with 1 matching item', function() {
    const list = Immutable.List(['a'])
    const result = pull(list, 'a')
    expect(Immutable.List.isList(result)).to.be.true
    expect(list.toJS()).to.deep.equal(['a'])
    expect(result.toJS()).to.deep.equal([])
  })

  it('pulls only 1 item from mutable array with 1 matching multiple items', function() {
    const array = ['a', 'b', 'a']
    const result = pull(array, 'a')
    expect(result).to.not.equal(array) //expect different array when change
    expect(array).to.deep.equal(['a', 'b', 'a']) //do not modify array
    expect(result).to.deep.equal(['b', 'a'])
  })

  it('pulls from Immutable.List with 1 matching item', function() {
    const list = Immutable.List(['a', 'b', 'a'])
    const result = pull(list, 'a')
    expect(Immutable.List.isList(result)).to.be.true
    expect(result).to.not.equal(list) //expect different array when change
    expect(list.toJS()).to.deep.equal(['a', 'b', 'a'])
    expect(result.toJS()).to.deep.equal(['b', 'a'])
  })

  it('pulls from mutable array start', function() {
    const array = ['a', 'b', 'c']
    const result = pull(array, 'a')
    expect(result).to.not.equal(array) //expect different array when change
    expect(array).to.deep.equal(['a', 'b', 'c']) //do not modify array
    expect(result).to.deep.equal(['b', 'c'])
  })

  it('pulls from Immutable.List start', function() {
    const list = Immutable.List(['a', 'b', 'c'])
    const result = pull(list, 'a')
    expect(Immutable.List.isList(result)).to.be.true
    expect(result).to.not.equal(list) //expect different array when change
    expect(list.toJS()).to.deep.equal(['a', 'b', 'c'])
    expect(result.toJS()).to.deep.equal(['b', 'c'])
  })

  it('pulls from mutable array middle', function() {
    const array = ['a', 'b', 'c']
    const result = pull(array, 'b')
    expect(result).to.not.equal(array) //expect different array when change
    expect(array).to.deep.equal(['a', 'b', 'c']) //do not modify array
    expect(result).to.deep.equal(['a', 'c'])
  })

  it('pulls from Immutable.List middle', function() {
    const list = Immutable.List(['a', 'b', 'c'])
    const result = pull(list, 'b')
    expect(Immutable.List.isList(result)).to.be.true
    expect(result).to.not.equal(list) //expect different array when change
    expect(list.toJS()).to.deep.equal(['a', 'b', 'c'])
    expect(result.toJS()).to.deep.equal(['a', 'c'])
  })

  it('pulls from mutable array end', function() {
    const array = ['a', 'b', 'c']
    const result = pull(array, 'c')
    expect(result).to.not.equal(array) //expect different array when change
    expect(array).to.deep.equal(['a', 'b', 'c']) //do not modify array
    expect(result).to.deep.equal(['a', 'b'])
  })

  it('pulls from Immutable.List end', function() {
    const list = Immutable.List(['a', 'b', 'c'])
    const result = pull(list, 'c')
    expect(Immutable.List.isList(result)).to.be.true
    expect(result).to.not.equal(list) //expect different array when change
    expect(list.toJS()).to.deep.equal(['a', 'b', 'c'])
    expect(result.toJS()).to.deep.equal(['a', 'b'])
  })

  it('pulls multiple from mutable array', function() {
    const array = ['a', 'b', 'c']
    const result = pull(array, 'a', 'c')
    expect(result).to.not.equal(array) //expect different array when change
    expect(array).to.deep.equal(['a', 'b', 'c']) //do not modify array
    expect(result).to.deep.equal(['b'])
  })

  it('pulls multiple from Immutable.List', function() {
    const list = Immutable.List(['a', 'b', 'c'])
    const result = pull(list, 'a', 'c')
    expect(Immutable.List.isList(result)).to.be.true
    expect(result).to.not.equal(list) //expect different array when change
    expect(list.toJS()).to.deep.equal(['a', 'b', 'c'])
    expect(result.toJS()).to.deep.equal(['b'])
  })
})
