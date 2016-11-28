import 'babel-polyfill'
import { expect } from 'chai'
import _ from 'lodash'
import { toImmutable } from '../'
import { primitives } from './shared'
import { setupTest } from './util'

describe('toImmutable', function() {
  const testContext = setupTest()

  it('should return same value for primitives', function() {
    const values = primitives(testContext)
    _.each(values, (value) => {
      if (_.isNaN(value)) {
        expect(toImmutable(value)).to.be.NaN
      } else {
        expect(toImmutable(value)).to.equal(value)
      }
    })
  })
})
