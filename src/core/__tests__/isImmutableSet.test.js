import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableSet } from '../'
import { primitives } from './values'
import { setupTest } from './util'

describe('isImmutableSet', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableSet(value)).to.be.false
    })
  })
})
