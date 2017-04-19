import 'babel-polyfill'
import { expect } from 'chai'
import { flow } from '../'
import Immutable from 'immutable'

describe('flow', function() {

  it('flows two functions', function() {
    const called = []
    const func = flow(
      (val) => {
        called.push('1')
        return val + 1
      },
      (val) => {
        called.push('2')
        return val + 2
      }
    )
    const result = func(3)
    expect(result).to.equal(6)
    expect(called).to.deep.equal(['1', '2'])
  })

  it('flows array of two functions', function() {
    const called = []
    const func = flow([
      (val) => {
        called.push('1')
        return val + 1
      },
      (val) => {
        called.push('2')
        return val + 2
      }
    ])
    const result = func(3)
    expect(result).to.equal(6)
    expect(called).to.deep.equal(['1', '2'])
  })

  it('flows Immutable.List of two functions', function() {
    const called = []
    const func = flow(Immutable.List([
      (val) => {
        called.push('1')
        return val + 1
      },
      (val) => {
        called.push('2')
        return val + 2
      }
    ]))
    const result = func(3)
    expect(result).to.equal(6)
    expect(called).to.deep.equal(['1', '2'])
  })
})
