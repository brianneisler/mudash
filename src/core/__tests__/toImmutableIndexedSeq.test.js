import 'babel-polyfill'
import { expect } from 'chai'
import Immutable from 'immutable'
import _ from 'lodash'
import { toImmutableIndexedSeq } from '../'
import { primitives } from './shared'
import { setupTest } from './util'

describe('toImmutableIndexedSeq', function() {
  const testContext = setupTest()

  it('should return empty Immutable.Seq.Indexed for primitives', function() {
    const values = primitives(testContext, ['booleans', 'booleanObjects', 'nils', 'nilObjects', 'numbers', 'numberObjects', 'symbols'])
    _.each(values, (value) => {
      expect(Immutable.is(toImmutableIndexedSeq(value), Immutable.Seq.Indexed())).to.be.true
    })
  })
})
