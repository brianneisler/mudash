import 'babel-polyfill'
import { expect } from 'chai'
import { find } from '../'
import Immutable from 'immutable'

describe('find', function() {

  it('finds value based on predicate in mutable array', function() {
    const data = [1, 2, 3]
    const result = find(data, (value) => value === 2)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.equal(2)
  })

  it('finds value based on predicate in immutable list', function() {
    const data = Immutable.List([1, 2, 3])
    const result = find(data, (value) => value === 2)
    expect(data.toJS()).to.deep.equal([1, 2, 3])
    expect(result).to.equal(2)
  })

  it('finds first value of multiple possible matches based on predicate in mutable array', function() {
    const data = [{a:1}, {a:2}, {a:3}]
    const result = find(data, (value) => value.a > 1)
    expect(data).to.deep.equal([{a:1}, {a:2}, {a:3}])
    expect(result).to.deep.equal({a:2})
    expect(result).to.equal(data[1])
  })

  it('finds first value of multiple possible matches based on predicate in immutable list', function() {
    const data = Immutable.List([{a:1}, {a:2}, {a:3}])
    const result = find(data, (value) => value.a > 1)
    expect(data.toJS()).to.deep.equal([{a:1}, {a:2}, {a:3}])
    expect(result).to.deep.equal({a:2})
    expect(result).to.equal(data.get(1))
  })
})
