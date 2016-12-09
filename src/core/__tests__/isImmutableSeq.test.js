import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableSeq } from '../'
import { primitives } from './values'
import { setupTest } from './util'

describe('isImmutableSeq', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableSeq(value)).to.be.false
    })
  })
})
