import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutable } from '../'
import { immutables, primitives } from './values'
import { setupTest } from './util'

describe('isImmutable', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    const pairs = _.map(values, (value) => ({
      value,
      expected: false
    }))
    _.each(pairs, (pair) => {
      expect(isImmutable(pair.value)).to.equal(pair.expected)
    })
  })

  it('should return true for immutables', function() {
    const values = immutables(testContext)
    const pairs = _.map(values, (value) => ({
      value,
      expected: true
    }))
    _.each(pairs, (pair) => {
      expect(isImmutable(pair.value)).to.equal(pair.expected)
    })
  })
})
