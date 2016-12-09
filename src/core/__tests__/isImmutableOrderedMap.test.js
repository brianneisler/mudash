import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableOrderedMap } from '../'
import { primitives } from './values'
import { setupTest } from './util'

describe('isImmutableOrderedMap', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableOrderedMap(value)).to.be.false
    })
  })
})
