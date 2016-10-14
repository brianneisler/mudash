import 'babel-polyfill'
import { expect } from 'chai'
import { concat } from '../'
import Immutable from 'immutable'

describe('concat', function() {

  it('concats to mutable empty array', function() {
    const array = []
    const result = concat(array, ['test1'])
    expect(result).not.to.equal(array) //expect new array
    expect(array).to.deep.equal([]) //do no modify array
    expect(result).to.deep.equal([
      'test1'
    ])
  })

  it('concats to mutable array with values', function() {
    const array = ['test1', 'test2']
    const result = concat(array, ['test3'])
    expect(result).to.deep.equal([
      'test1',
      'test2',
      'test3'
    ])
  })

  it('includes data as first item if empty value', function() {
    const data = undefined
    const result = concat(data, ['test1'])
    expect(result).to.deep.equal([
      undefined,
      'test1'
    ])
  })

  it('concats to immutable List', function() {
    const data = Immutable.fromJS([])
    const result = concat(data, ['test1'])
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS()).to.deep.equal([
      'test1'
    ])
  })
})
