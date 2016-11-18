import 'babel-polyfill'
import { expect } from 'chai'
import { assocWith } from '../'
import Immutable from 'immutable'

describe('assocWith', function() {

  it('passes in modified data to customizer to allow for multiple computations on property using mutable data', function() {
    const data = {
      a: 1
    }
    const result = assocWith(data, {
      a: 2
    }, (prev, next) => prev + next)
    expect(data).to.deep.equal({
      a: 1
    })
    expect(result).to.deep.equal({
      a: 3
    })
    expect(result).to.not.equal(data) //not same instance
  })

  it('passes in modified data to customizer to allow for multiple computations on property using immutable data', function() {
    const data = Immutable.fromJS({
      a: 1
    })
    const result = assocWith(data, {
      a: 2
    }, (prev, next) => prev + next)
    expect(data.toJS()).to.deep.equal({
      a: 1
    })
    expect(result.toJS()).to.deep.equal({
      a: 3
    })
    expect(result).to.not.equal(data) //not same instance
  })
})
