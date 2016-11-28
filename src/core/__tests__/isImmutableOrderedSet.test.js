import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableOrderedSet } from '../'
import { primitives } from './shared'
import { setupTest } from './util'

describe('isImmutableOrderedSet', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableOrderedSet(value)).to.be.false
    })
  })
})
