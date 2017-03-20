import 'babel-polyfill'
import { expect } from 'chai'
import { omit } from '../'
import Immutable from 'immutable'

describe('omit', function() {

  it('omits from empty object', function() {
    const object = {}
    const result = omit(object, [])
    //expect(result).to.equal(object) //expect same object when no change
    expect(result).to.deep.equal({}) //do not modify object
  })

  it('omits from empty Immutable.Map', function() {
    const map = Immutable.Map({})
    const result = omit(map, [])
    expect(Immutable.Map.isMap(result)).to.be.true
    expect(map.toJS()).to.deep.equal({})
    expect(result.toJS()).to.deep.equal({})
  })

  it('omits from object', function() {
    const object = { a:1, b:2 }
    const result = omit(object, ['a'])
    expect(result).to.not.equal(object) //expect different object
    expect(object).to.deep.equal({ a:1, b:2 }) //do not modify object
    expect(result).to.deep.equal({ b:2 })
  })

  it('omits from Immutable.Map', function() {
    const map = Immutable.Map({ a:1, b:2 })
    const result = omit(map, ['a'])
    expect(Immutable.Map.isMap(result)).to.be.true
    expect(map.toJS()).to.deep.equal({ a:1, b:2 })
    expect(result.toJS()).to.deep.equal({ b:2 })
  })
})
