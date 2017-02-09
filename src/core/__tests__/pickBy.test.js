import 'babel-polyfill'
import { expect } from 'chai'
import { pickBy } from '../'
import Immutable from 'immutable'

const object = { 'a': 1, 'b': 2, 'c': 3 }

describe('pickBy', function () {
  it('should create an object composed of object properties `predicate` returns truthy', function () {
    const result = pickBy(object, n => n % 2)
    expect(result).to.deep.equal({'a': 1, 'c': 3})
  })

  it('should create an immutable map composed of object properties `predicate` returns truthy', function () {
    const map = Immutable.fromJS(object)
    const result = pickBy(map, n => n % 2)
    expect(Immutable.Map.isMap(result)).to.be.true // returns an immutable map
    expect(result.toJS()).to.deep.equal({'a': 1, 'c': 3})
  })
})
