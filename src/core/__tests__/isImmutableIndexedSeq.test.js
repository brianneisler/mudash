import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableIndexedSeq } from '../'
import { immutables, primitives } from './shared'
import { setupTest } from './util'

describe('isImmutableIndexedSeq', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    const pairs = _.map(values, (value) => ({
      actual: isImmutableIndexedSeq(value),
      expected: false
    }))
    const actual = _.map(pairs, (pair) => pair.actual)
    const expected = _.map(pairs, (pair) => pair.expected)
    expect(actual).to.deep.equal(expected)
  })

  it('should return false for all immutables except Iterable, Seq and Seq.Indexed', function() {
    const values = immutables(testContext, ['List', 'Map', 'OrderedMap', 'OrderedSet', 'Seq.Keyed', 'Seq.Set', 'Set', 'Stack'])
    const pairs = _.map(values, (value) => ({
      actual: isImmutableIndexedSeq(value),
      expected: false
    }))
    const actual = _.map(pairs, (pair) => pair.actual)
    const expected = _.map(pairs, (pair) => pair.expected)
    expect(actual).to.deep.equal(expected)
  })

  it('should return true for Seq.Indexed', function() {
    const values = immutables(testContext, ['Iterable', 'Seq', 'Seq.Indexed'])
    const pairs = _.map(values, (value) => ({
      actual: isImmutableIndexedSeq(value),
      expected: true
    }))
    const actual = _.map(pairs, (pair) => pair.actual)
    const expected = _.map(pairs, (pair) => pair.expected)
    expect(actual).to.deep.equal(expected)
  })
})
