import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableList } from '../'
import { primitives } from './values'
import { setupTest } from './util'

describe('isImmutableList', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableList(value)).to.be.false
    })
  })
})
