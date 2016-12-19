import 'babel-polyfill'
import { expect } from 'chai'
import { compose } from '../'
import Immutable from 'immutable'

describe('compose', function() {

  it('composes two functions', function() {
    const func = compose(
      (val) => val + 1,
      (val) => val + 2
    )
    const result = func(3)
    expect(result).to.equal(6)
  })

  it('composes array of two functions', function() {
    const func = compose([
      (val) => val + 1,
      (val) => val + 2
    ])
    const result = func(3)
    expect(result).to.equal(6)
  })

  it('composes Immutable.List of two functions', function() {
    const func = compose(Immutable.List([
      (val) => val + 1,
      (val) => val + 2
    ]))
    const result = func(3)
    expect(result).to.equal(6)
  })
})
