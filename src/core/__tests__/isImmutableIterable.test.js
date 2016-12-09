import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableIterable } from '../'
import { primitives } from './values'
import { setupTest } from './util'

describe('isImmutableIterable', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableIterable(value)).to.be.false
    })
  })
})
