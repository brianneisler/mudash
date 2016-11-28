import 'babel-polyfill'
import { expect } from 'chai'
import Immutable from 'immutable'
import { map } from '../'

describe('map', function() {

  it('maps over empty array and defaults to identity', function() {
    const array = []
    const result = map(array)
    expect(result).not.to.equal(array) //expect new array
    expect(result).to.deep.equal([]) //do no modify array
  })

  it('maps over empty list and defaults to identity', function() {
    const list = Immutable.List([])
    const result = map(list)
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS()).to.deep.equal([]) //do no modify array
  })

  it('maps over array values and defaults to identity', function() {
    const array = [1, 'a', null]
    const result = map(array)
    expect(result).not.to.equal(array) //expect new array
    expect(result).to.deep.equal([1, 'a', null]) //do not modify array
  })

  it('maps over list values and defaults to identity', function() {
    const list = Immutable.List([1, 'a', null])
    const result = map(list)
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS()).to.deep.equal([1, 'a', null]) //do not modify list
  })

  it('maps over array values and executes supplied method', function() {
    const array = [1, 2, 3]
    const result = map(array, (val) => val * 2)
    expect(result).not.to.equal(array) //expect new array
    expect(result).to.deep.equal([2, 4, 6])
  })

  it('maps over list values and executes supplied method', function() {
    const list = Immutable.List([1, 2, 3])
    const result = map(list, (val) => val * 2)
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS()).to.deep.equal([2, 4, 6])
  })

  it('uses the property shorthand for mutable array', function() {
    const values = [
      {
        a: 1
      },
      {
        a: 2
      },
      {
        a: 3
      }
    ]
    const expected = [1, 2, 3]
    const actual = map(values, 'a')
    expect(actual).to.deep.equal(expected)
  })

  it('uses the property shorthand for immutable list', function() {
    const values = Immutable.fromJS([
      {
        a: 1
      },
      {
        a: 2
      },
      {
        a: 3
      }
    ])
    const expected = [1, 2, 3]
    const actual = map(values, 'a')
    expect(Immutable.List.isList(actual)).to.be.true
    expect(actual.toJS()).to.deep.equal(expected)
  })
})
