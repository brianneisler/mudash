import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableMap } from '../'
import { primitives } from './shared'
import { setupTest } from './util'

describe('isImmutableMap', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableMap(value)).to.be.false
    })
  })
})
