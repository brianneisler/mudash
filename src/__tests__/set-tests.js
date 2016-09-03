import 'babel-polyfill'
import { expect } from 'chai'
import set from '../set'
import Immutable from 'immutable'

describe('set', function() {

  it('treats empty string as prop in mutable data', function() {
    const data = {}
    const result = set(data, '', 1)
    expect(result).to.deep.equal({
      '': 1
    })
    expect(result).to.equal(data) //same instance
  })

  it('treats empty string as prop in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = set(data, '', 1)
    expect(result.toJS()).to.deep.equal({
      '': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('sets not existing shallow prop in mutable data', function() {
    const data = {}
    const result = set(data, 'a', 1)
    expect(result).to.deep.equal({
      a: 1
    })
    expect(result).to.equal(data) //same instance
  })

  it('sets not existing shallow prop in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = set(data, 'a', 1)
    expect(result.toJS()).to.deep.equal({
      a: 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('sets existing prop in mutable data', function() {
    const data = { a: 2 }
    const result = set(data, 'a', 1)
    expect(result).to.deep.equal({
      a: 1
    })
    expect(result).to.equal(data) //same instance
  })

  it('sets existing prop in immutable data', function() {
    const data = Immutable.fromJS({ a: 2 })
    const result = set(data, 'a', 1)
    expect(result.toJS()).to.deep.equal({
      a: 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('sets not existing deep prop in mutable data', function() {
    const data = {}
    const result = set(data, 'a.b', 1)
    expect(result).to.deep.equal({
      a: {
        b: 1
      }
    })
    expect(result).to.equal(data) //same instance
  })

  it('sets not existing deep prop in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = set(data, 'a.b', 1)
    expect(Immutable.Map.isMap(result.get('a'))).to.be.true
    expect(result.toJS()).to.deep.equal({
      a: {
        b: 1
      }
    })
    expect(result).to.not.equal(data) //not same instance
  })
})
