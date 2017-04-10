import 'babel-polyfill'
import { expect } from 'chai'
import { Keyed } from '../'
import Immutable from 'immutable'

describe('Keyed', function() {

  it('is correctly detects values that implement Keyed protocol', function() {
    const data = {
      get: () => {},
      has: () => {}
    }
    const dataMissing = {
      get: () => {}
    }
    const map = Immutable.Map({})
    const list = Immutable.List([])
    const set = Immutable.Set([])
    expect(Keyed.is(data)).to.be.true
    expect(Keyed.is(dataMissing)).to.be.false
    expect(Keyed.is({})).to.be.false
    expect(Keyed.is(map)).to.be.true
    expect(Keyed.is(list)).to.be.true
    expect(Keyed.is(set)).to.be.true
  })
})
