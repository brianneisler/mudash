import 'babel-polyfill'
import { expect } from 'chai'
import { findIndex } from '../'
import Immutable from 'immutable'

describe('findIndex', function() {

  it('returns -1 for index not found in mutable array', function() {
    const data = [1, 2, 3]
    const result = findIndex(data, (value) => value === 4)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.equal(-1)
  })

  it('returns -1 for index not found in Immutable.List', function() {
    const data = Immutable.List([1, 2, 3])
    const result = findIndex(data, (value) => value === 4)
    expect(data.toJS()).to.deep.equal([1, 2, 3])
    expect(result).to.equal(-1)
  })

  it('returns -1 for Immutable.Map (Map is not indexed)', function() {
    const data = Immutable.Map({a:1, b:2, c:3})
    const result = findIndex(data, (value) => value === 2)
    expect(data.toJS()).to.deep.equal({a:1, b:2, c:3})
    expect(result).to.equal(-1)
  })

  it('finds index based on predicate in mutable array', function() {
    const data = [1, 2, 3]
    const result = findIndex(data, (value) => value === 2)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.equal(1)
  })

  it('finds value based on predicate in Immutable.List', function() {
    const data = Immutable.List([1, 2, 3])
    const result = findIndex(data, (value) => value === 2)
    expect(data.toJS()).to.deep.equal([1, 2, 3])
    expect(result).to.equal(1)
  })

  it('finds value based on predicate in Immutable.OrderedMap', function() {
    const data = Immutable.OrderedMap({a:1, b:2, c:3})
    const result = findIndex(data, (value) => value === 2)
    expect(data.toJS()).to.deep.equal({a:1, b:2, c:3})
    expect(result).to.equal(1)
  })

  it('finds value based on predicate in Immutable.OrderedSet', function() {
    const data = Immutable.OrderedSet([1, 2, 3])
    const result = findIndex(data, (value) => value === 2)
    expect(data.toJS()).to.deep.equal([1, 2, 3])
    expect(result).to.equal(1)
  })

  it('finds first value of multiple possible matches based on predicate in mutable array', function() {
    const data = [{a:1}, {a:2}, {a:3}]
    const result = findIndex(data, (value) => value.a > 1)
    expect(data).to.deep.equal([{a:1}, {a:2}, {a:3}])
    expect(result).to.equal(1)
  })

  it('finds first value of multiple possible matches based on predicate in immutable list', function() {
    const data = Immutable.List([{a:1}, {a:2}, {a:3}])
    const result = findIndex(data, (value) => value.a > 1)
    expect(data.toJS()).to.deep.equal([{a:1}, {a:2}, {a:3}])
    expect(result).to.equal(1)
  })

  it('supports property iteratee shorthand in mutable array', function() {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ]

    const result = findIndex(users, 'active')
    expect(result).to.equal(0)
  })

  it('supports property iteratee shorthand in immutable list', function() {
    const users = Immutable.fromJS([
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ])

    const result = findIndex(users, 'active')
    expect(result).to.equal(0)
  })

  it('supports matches iteratee shorthand in mutable array', function() {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ]

    const result = findIndex(users, { 'age': 1, 'active': true })
    expect(result).to.equal(2)
  })

  it('supports matches iteratee shorthand in immutable list', function() {
    const users = Immutable.fromJS([
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ])

    const result = findIndex(users, { 'age': 1, 'active': true })
    expect(result).to.equal(2)
  })

  it('supports matchesProperty iteratee shorthand in mutable array', function() {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ]

    const result = findIndex(users, ['active', false])
    expect(result).to.equal(1)
  })

  it('supports matchesProperty iteratee shorthand in immutable list', function() {
    const users = Immutable.fromJS([
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ])

    const result = findIndex(users, ['active', false])
    expect(result).to.equal(1)
  })
})
