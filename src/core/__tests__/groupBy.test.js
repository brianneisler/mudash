import 'babel-polyfill'
import { expect } from 'chai'
import { groupBy } from '../'
import Immutable from 'immutable'

describe('groupBy', function() {

  it('groups numbers for mutable array', function() {
    const data = [6.1, 4.2, 6.3]
    const result = groupBy(data, Math.floor)
    expect(data).to.deep.equal([6.1, 4.2, 6.3])
    expect(result).to.deep.equal({
      '4': [4.2],
      '6': [6.1, 6.3]
    })
    expect(result).to.not.equal(data) // not same instance
  })

  it('groups numbers for immutable list', function() {
    const data = Immutable.fromJS([6.1, 4.2, 6.3])
    const result = groupBy(data, Math.floor)
    expect(data.toJS()).to.deep.equal([6.1, 4.2, 6.3])
    expect(result.toJS()).to.deep.equal({
      '4': [4.2],
      '6': [6.1, 6.3]
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('uses property shorthand for mutable array', function() {
    const data = ['one', 'two', 'three']
    const result = groupBy(data, 'length')
    expect(data).to.deep.equal(['one', 'two', 'three'])
    expect(result).to.deep.equal({
      '3': ['one', 'two'],
      '5': ['three']
    })
    expect(result).to.not.equal(data) // not same instance
  })

  it('uses property shorthand for immutable list', function() {
    const data = Immutable.fromJS(['one', 'two', 'three'])
    const result = groupBy(data, 'length')
    expect(data.toJS()).to.deep.equal(['one', 'two', 'three'])
    expect(result.toJS()).to.deep.equal({
      '3': ['one', 'two'],
      '5': ['three']
    })
    expect(result).to.not.equal(data) // not same instance
  })
})
