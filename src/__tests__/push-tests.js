import 'babel-polyfill'
import { expect } from 'chai'
import push from '../push'
import Immutable from 'immutable'

describe('push', function() {

  it('pushes to mutable array', async function() {
    const array = []
    const result = push(array, 'test1')
    expect(result).to.deep.equal([
      'test1'
    ])
  })

  it('returns array if data is empty', async function() {
    const data = null
    const result = push(data, 'test1')
    expect(result).to.deep.equal([
      'test1'
    ])
  })

  it('pushes to immutable List', async function() {
    const data = Immutable.fromJS([])
    const result = push(data, 'test1')
    expect(Immutable.List.isList(result)).to.be.true
    expect(result.toJS()).to.deep.equal([
      'test1'
    ])
  })
})
