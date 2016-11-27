import 'babel-polyfill'
import { expect } from 'chai'
import { has } from '../'
import Immutable from 'immutable'

describe('has', function() {

  it('returns false from mutable data when no prop available', function() {
    const data = {}
    const result = has(data, 'test1')
    expect(result).to.be.false
  })

  it('returns false from immutable Map when no key available', function() {
    const data = Immutable.fromJS({})
    const result = has(data, 'test1')
    expect(result).to.be.false
  })

  it('returns true from mutable data with shallow path', function() {
    const data = { a: 1 }
    const result = has(data, 'a')
    expect(result).to.be.true
  })

  it('returns true from immutable Map with shallow path', function() {
    const data = Immutable.fromJS({ a: 1 })
    const result = has(data, 'a')
    expect(result).to.be.true
  })

  it('returns true from mutable data with deep path', function() {
    const data = { a: { b: 2 } }
    const result = has(data, 'a.b')
    expect(result).to.be.true
  })

  it('returns true from immutable Map with deep path', function() {
    const data = Immutable.fromJS({ a: { b: 2 } })
    const result = has(data, 'a.b')
    expect(result).to.be.true
  })

  it('returns true from mixed mutable -> immutable with deep path', function() {
    const data = {
      a: Immutable.fromJS({ b: 2 })
    }
    const result = has(data, 'a.b')
    expect(result).to.be.true
  })

  it('returns true from mixed immutable -> mutable with deep path', function() {
    const data = Immutable.Map({
      a: { b: 2 }
    })
    const result = has(data, 'a.b')
    expect(result).to.be.true
  })
})
