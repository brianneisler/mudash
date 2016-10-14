import 'babel-polyfill'
import { expect } from 'chai'
import { push } from '../'
import Immutable from 'immutable'

describe('push', function() {

  it('pushes to mutable array', function() {
    const array = []
    const result = push(array, 'test1')
    expect(result).not.to.equal(array) //expect new array
    expect(array).to.deep.equal([]) //do no modify array
    expect(result).to.deep.equal([
      'test1'
    ])
  })

  it('returns array if data is empty', function() {
    const data = null
    const result = push(data, 'test1')
    expect(result).to.deep.equal([
      'test1'
    ])
  })

  it('pushes to immutable List', function() {
    const data = Immutable.fromJS([])
    const result = push(data, 'test1')
    expect(result).not.to.equal(data) //expect new array
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS()).to.deep.equal([
      'test1'
    ])
  })
})
