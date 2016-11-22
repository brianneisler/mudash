import 'babel-polyfill'
import { expect } from 'chai'
import { get } from '../'
import Immutable from 'immutable'

describe('get', function() {

  it('returns undefined from mutable data when no prop available', function() {
    const data = {}
    const result = get(data, 'test1')
    expect(result).to.be.undefined
  })

  it('returns undefined from immutable Map when no key available', function() {
    const data = Immutable.fromJS({})
    const result = get(data, 'test1')
    expect(result).to.be.undefined
  })

  it('returns expected value from mutable data with shallow path', function() {
    const data = { a: 1 }
    const result = get(data, 'a')
    expect(result).to.equal(1)
  })

  it('returns expected value from immutable Map with shallow path', function() {
    const data = Immutable.fromJS({ a: 1 })
    const result = get(data, 'a')
    expect(result).to.equal(1)
  })

  it('returns expected value from mutable data with deep path', function() {
    const data = { a: { b: 2 } }
    const result = get(data, 'a.b')
    expect(result).to.equal(2)
  })

  it('returns expected value from immutable Map with deep path', function() {
    const data = Immutable.fromJS({ a: { b: 2 } })
    const result = get(data, 'a.b')
    expect(result).to.equal(2)
  })

  it('returns expected value from mixed mutable -> immutable with deep path', function() {
    const data = {
      a: Immutable.fromJS({ b: 2 })
    }
    const result = get(data, 'a.b')
    expect(result).to.equal(2)
  })

  it('returns expected value from mixed immutable -> mutable with deep path', function() {
    const data = Immutable.Map({
      a: { b: 2 }
    })
    const result = get(data, 'a.b')
    expect(result).to.equal(2)
  })
})
