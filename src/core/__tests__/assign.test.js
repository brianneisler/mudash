import 'babel-polyfill'
import { expect } from 'chai'
import { assign } from '../'
import Immutable from 'immutable'

describe('assign', function() {

  it('treats empty string as prop in mutable data', function() {
    const data = {}
    const result = assign(data, {'': 1})
    expect(data).to.deep.equal({
      '': 1
    })
    expect(result).to.deep.equal({
      '': 1
    })
    expect(result).to.equal(data) //same instance
  })

  it('treats empty string as prop in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = assign(data, {
      '': 1
    })
    expect(data.toJS()).to.deep.equal({})
    expect(result.toJS()).to.deep.equal({
      '': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assigns not existing prop in mutable data', function() {
    const data = {}
    const result = assign(data, {
      'a': 1
    })
    expect(data).to.deep.equal({
      'a': 1
    })
    expect(result).to.deep.equal({
      'a': 1
    })
    expect(result).to.equal(data) //same instance
  })

  it('assigns not existing prop in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = assign(data, {
      'a': 1
    })
    expect(data.toJS()).to.deep.equal({})
    expect(result.toJS()).to.deep.equal({
      'a': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assigns existing prop in mutable data', function() {
    const data = { a: 2 }
    const result = assign(data, {
      'a': 1
    })
    expect(data).to.deep.equal({
      'a': 1
    })
    expect(result).to.deep.equal({
      'a': 1
    })
    expect(result).to.equal(data) //same instance
  })

  it('assigns existing prop in immutable data', function() {
    const data = Immutable.fromJS({ a: 2 })
    const result = assign(data, {
      'a': 1
    })
    expect(data.toJS()).to.deep.equal({ a: 2 })
    expect(result.toJS()).to.deep.equal({
      'a': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('overwrites existing deep prop in mutable data', function() {
    const data = {
      a: {
        b: 1
      }
    }
    const result = assign(data, {
      a: {
        c: 2
      }
    })
    expect(data).to.deep.equal({
      a: {
        c: 2
      }
    })
    expect(result).to.deep.equal({
      a: {
        c: 2
      }
    })
    expect(result).to.equal(data) //same instance
  })

  it('overwrites existing deep prop in immutable data', function() {
    const data = Immutable.fromJS({
      a: {
        b: 1
      }
    })
    const result = assign(data, {
      a: {
        c: 2
      }
    })
    expect(data.toJS()).to.deep.equal({
      a: {
        b: 1
      }
    })
    expect(Immutable.Map.isMap(result.get('a'))).to.be.true
    expect(result.toJS()).to.deep.equal({
      a: {
        c: 2
      }
    })
    expect(result).to.not.equal(data) //not same instance
  })
})
