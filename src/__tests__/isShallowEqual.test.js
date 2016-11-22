import 'babel-polyfill'
import { expect } from 'chai'
import { isShallowEqual } from '../'
import Immutable from 'immutable'

describe('isShallowEqual', function() {

  it('equates different empty objects as equal', function() {
    const data1 = {}
    const data2 = {}
    const result = isShallowEqual(data1, data2)
    expect(result).to.be.true
  })

  it('equates different empty immutable maps as equal', function() {
    const data1 = Immutable.Map({})
    const data2 = Immutable.Map({})
    const result = isShallowEqual(data1, data2)
    expect(result).to.be.true
  })

  it('equates different objects with same values as equal', function() {
    const data1 = {
      a: 1,
      b: 'test',
      c: null
    }
    const data2 = {
      a: 1,
      b: 'test',
      c: null
    }
    const result = isShallowEqual(data1, data2)
    expect(result).to.be.true
  })

  it('equates different immutable maps with same values as equal', function() {
    const data1 = Immutable.Map({
      a: 1,
      b: 'test',
      c: null
    })
    const data2 = Immutable.Map({
      a: 1,
      b: 'test',
      c: null
    })
    const result = isShallowEqual(data1, data2)
    expect(result).to.be.true
  })

  it('equates different objects with same values but extra properties as unequal', function() {
    const data1 = {
      a: 1,
      b: 'test'
    }
    const data2 = {
      a: 1,
      b: 'test',
      c: null
    }
    const result = isShallowEqual(data1, data2)
    expect(result).to.be.false
  })

  it('equates different immutable maps with same values but extra properties as unequal', function() {
    const data1 = Immutable.Map({
      a: 1,
      b: 'test'
    })
    const data2 = Immutable.Map({
      a: 1,
      b: 'test',
      c: null
    })
    const result = isShallowEqual(data1, data2)
    expect(result).to.be.false
  })

  it('equates different objects with deep object that have different identity but same value as unequal', function() {
    const data1 = {
      a: 1,
      b: {}
    }
    const data2 = {
      a: 1,
      b: {}
    }
    const result = isShallowEqual(data1, data2)
    expect(result).to.be.false
  })

  it('equates different immutable maps with deep object that have different identity but same value as unequal', function() {
    const data1 = Immutable.Map({
      a: 1,
      b: {}
    })
    const data2 = Immutable.Map({
      a: 1,
      b: {}
    })
    const result = isShallowEqual(data1, data2)
    expect(result).to.be.false
  })
})
