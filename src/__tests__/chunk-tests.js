import 'babel-polyfill'
import { expect } from 'chai'
import chunk from '../chunk'
import Immutable from 'immutable'

describe('chunk', function() {

  it('chunks exact split for mutable array', function() {
    const data = ['a', 'b', 'c', 'd']
    const result = chunk(data, 2)
    expect(result).to.deep.equal([
      ['a', 'b'],
      ['c', 'd']
    ])
  })

  it('chunks exact split for immutable list', function() {
    const data = Immutable.fromJS(['a', 'b', 'c', 'd'])
    const result = chunk(data, 2)
    expect(result.toJS()).to.deep.equal([
      ['a', 'b'],
      ['c', 'd']
    ])
  })

  it('chunks split with remainder for mutable array', function() {
    const data = ['a', 'b', 'c', 'd']
    const result = chunk(data, 3)
    expect(result).to.deep.equal([
      ['a', 'b', 'c'],
      ['d']
    ])
  })

  it('chunks split with remainder for immutable list', function() {
    const data = Immutable.fromJS(['a', 'b', 'c', 'd'])
    const result = chunk(data, 3)
    expect(result.toJS()).to.deep.equal([
      ['a', 'b', 'c'],
      ['d']
    ])
  })
})
