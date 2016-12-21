import 'babel-polyfill'
import { expect } from 'chai'
import { pick } from '../'
import Immutable from 'immutable'

const object = { 'a': 1, 'b': 2, 'c': 3 }

describe('pick', function () {
  it('should create an object composed of object properties', function () {
    const result = pick(object, ['a', 'c'])
    expect(result).to.deep.equal({'a': 1, 'c': 3})
  })

  it('should create an immutable map composed of object properties', function () {
    const map = Immutable.fromJS(object)
    const result = pick(map, ['a', 'c'])
    expect(Immutable.Map.isMap(result)).to.be.true // returns an immutable map
    expect(result.toJS()).to.deep.equal({'a': 1, 'c': 3})
  })
})
