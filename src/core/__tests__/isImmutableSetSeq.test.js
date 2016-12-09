import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableSetSeq } from '../'
import { primitives } from './values'
import { setupTest } from './util'

describe('isImmutableSetSeq', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableSetSeq(value)).to.be.false
    })
  })
})
