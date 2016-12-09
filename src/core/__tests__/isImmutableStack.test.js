import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { isImmutableStack } from '../'
import { primitives } from './values'
import { setupTest } from './util'

describe('isImmutableStack', function() {
  const testContext = setupTest()

  it('should return false for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      expect(isImmutableStack(value)).to.be.false
    })
  })
})
