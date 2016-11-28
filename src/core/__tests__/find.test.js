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

  it('supports property iteratee shorthand in mutable array', function() {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ]

    const actual = find(users, 'active')
    const expected = users[0]
    expect(actual).to.equal(expected)
  })

  it('supports property iteratee shorthand in immutable list', function() {
    const users = Immutable.fromJS([
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ])

    const actual = find(users, 'active')
    const expected = { 'user': 'barney',  'age': 36, 'active': true }
    expect(Immutable.Map.isMap(actual)).to.be.true
    expect(actual.toJS()).to.deep.equal(expected)
  })

  it('supports matches iteratee shorthand in mutable array', function() {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ]

    const actual = find(users, { 'age': 1, 'active': true })
    const expected = users[2]
    expect(actual).to.equal(expected)
  })

  it('supports matches iteratee shorthand in immutable list', function() {
    const users = Immutable.fromJS([
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ])

    const actual = find(users, { 'age': 1, 'active': true })
    const expected = { 'user': 'pebbles', 'age': 1,  'active': true }
    expect(Immutable.Map.isMap(actual)).to.be.true
    expect(actual.toJS()).to.deep.equal(expected)
  })

  it('supports matchesProperty iteratee shorthand in mutable array', function() {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ]

    const actual = find(users, ['active', false])
    const expected = users[1]
    expect(actual).to.equal(expected)
  })

  it('supports matchesProperty iteratee shorthand in immutable list', function() {
    const users = Immutable.fromJS([
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ])

    const actual = find(users, ['active', false])
    const expected = { 'user': 'fred',    'age': 40, 'active': false }
    expect(Immutable.Map.isMap(actual)).to.be.true
    expect(actual.toJS()).to.deep.equal(expected)
  })
})
