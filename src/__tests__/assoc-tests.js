import 'babel-polyfill'
import { expect } from 'chai'
import assoc from '../assoc'
import Immutable from 'immutable'

describe('assoc', function() {

  it('treats empty string as prop in mutable data', function() {
    const data = {}
    const result = assoc(data, '', 1)
    expect(data).to.deep.equal({})
    expect(result).to.deep.equal({
      '': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('treats empty string as prop in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = assoc(data, '', 1)
    expect(data.toJS()).to.deep.equal({})
    expect(result.toJS()).to.deep.equal({
      '': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assocs not existing prop in mutable data', function() {
    const data = {}
    const result = assoc(data, 'a', 1)
    expect(data).to.deep.equal({})
    expect(result).to.deep.equal({
      'a': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assocs not existing prop in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = assoc(data, 'a', 1)
    expect(data.toJS()).to.deep.equal({})
    expect(result.toJS()).to.deep.equal({
      'a': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assocs existing prop in mutable data', function() {
    const data = { a: 2 }
    const result = assoc(data, 'a', 1)
    expect(data).to.deep.equal({ a: 2 })
    expect(result).to.deep.equal({
      'a': 1
    })
    expect(result).to.not.equal(data) //same instance
  })

  it('assocs existing prop in immutable data', function() {
    const data = Immutable.fromJS({ a: 2 })
    const result = assoc(data, 'a', 1)
    expect(data.toJS()).to.deep.equal({ a: 2 })
    expect(result.toJS()).to.deep.equal({
      'a': 1
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assocs not existing deep prop in mutable data', function() {
    const data = {}
    const result = assoc(data, 'a.b', 1)
    expect(data).to.deep.equal({})
    expect(result).to.deep.equal({
      a: {
        b: 1
      }
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assocs not existing deep prop in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = assoc(data, 'a.b', 1)
    expect(data.toJS()).to.deep.equal({})
    expect(Immutable.Map.isMap(result.get('a'))).to.be.true
    expect(result.toJS()).to.deep.equal({
      a: {
        b: 1
      }
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assocs multiple deep props in mutable data', function() {
    const data = {}
    const result = assoc(data, {
      'a.b': 1,
      'a.c': 2,
      'b.d': 3
    })
    expect(data).to.deep.equal({})
    expect(result).to.deep.equal({
      a: {
        b: 1,
        c: 2
      },
      b: {
        d: 3
      }
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('assocs multiple deep props in immutable data', function() {
    const data = Immutable.fromJS({})
    const result = assoc(data, {
      'a.b': 1,
      'a.c': 2,
      'b.d': 3
    })
    expect(data.toJS()).to.deep.equal({})
    expect(Immutable.Map.isMap(result.get('a'))).to.be.true
    expect(Immutable.Map.isMap(result.get('b'))).to.be.true
    expect(result.toJS()).to.deep.equal({
      a: {
        b: 1,
        c: 2
      },
      b: {
        d: 3
      }
    })
    expect(result).to.not.equal(data) //not same instance
  })
})
