import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableKeyedSeq } from '../'
import { primitives } from './values'
import { setupTest } from './util'

describe('isImmutableKeyedSeq', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableKeyedSeq(value)).to.be.false
    })
  })
})
