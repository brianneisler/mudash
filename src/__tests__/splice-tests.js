import 'babel-polyfill'
import { expect } from 'chai'
import { splice } from '../'
import Immutable from 'immutable'

describe('splice', function() {

  // MUTABLE TESTS

  it('splices mutable array with only index=1, "removeNum" is undefined', function() {
    const data = [1, 2, 3]
    const result = splice(data, 1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=0, "removeNum" is undefined', function() {
    const data = [1, 2, 3]
    const result = splice(data, 0)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=-1, "removeNum" is undefined', function() {
    const data = [1, 2, 3]
    const result = splice(data, -1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=10, "removeNum" is undefined', function() {
    const data = [1, 2, 3]
    const result = splice(data, 10)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=1, removeNum=1', function() {
    const data = [1, 2, 3]
    const result = splice(data, 1, 1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 3])
  })

  it('splices mutable array with only index=0, removeNum=1', function() {
    const data = [1, 2, 3]
    const result = splice(data, 0, 1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([2, 3])
  })

  it('splices mutable array with only index=-1, removeNum=1', function() {
    const data = [1, 2, 3]
    const result = splice(data, -1, 1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2])
  })

  it('splices mutable array with only index=10, removeNum=1', function() {
    const data = [1, 2, 3]
    const result = splice(data, 10, 1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=1, removeNum=0', function() {
    const data = [1, 2, 3]
    const result = splice(data, 1, 0)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=0, removeNum=0', function() {
    const data = [1, 2, 3]
    const result = splice(data, 0, 0)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=-, removeNum=0', function() {
    const data = [1, 2, 3]
    const result = splice(data, -1, 0)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=10, removeNum=0', function() {
    const data = [1, 2, 3]
    const result = splice(data, 10, 0)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=1, removeNum=-1', function() {
    const data = [1, 2, 3]
    const result = splice(data, 1, -1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=0, removeNum=-1', function() {
    const data = [1, 2, 3]
    const result = splice(data, 0, -1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=-1, removeNum=-1', function() {
    const data = [1, 2, 3]
    const result = splice(data, -1, -1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=10, removeNum=-1', function() {
    const data = [1, 2, 3]
    const result = splice(data, 10, -1)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=1, removeNum=20', function() {
    const data = [1, 2, 3]
    const result = splice(data, 1, 20)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1])
  })

  it('splices mutable array with only index=0, removeNum=20', function() {
    const data = [1, 2, 3]
    const result = splice(data, 0, 20)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([])
  })

  it('splices mutable array with only index=-1, removeNum=20', function() {
    const data = [1, 2, 3]
    const result = splice(data, -1, 20)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2])
  })

  it('splices mutable array with only index=10, removeNum=20', function() {
    const data = [1, 2, 3]
    const result = splice(data, 10, 20)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('splices mutable array with only index=1, removeNum=1 and replacement 4', function() {
    const data = [1, 2, 3]
    const result = splice(data, 1, 1, 4)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 4, 3])
  })

  it('splices mutable array with only index=1, removeNum=1 and replacements 4, 5, 6, 7, 8', function() {
    const data = [1, 2, 3]
    const result = splice(data, 1, 1, 4, 5, 6, 7, 8)
    expect(data).to.deep.equal([1, 2, 3])
    expect(result).to.deep.equal([1, 4, 5, 6, 7, 8, 3])
  })


  // IMMUTABLE TESTS

  it('splices immutable list with only index=1, "removeNum" is undefined', function() {
    const data = Immutable.fromJS([1, 2, 3])
    const result = splice(data, 1)
    expect(data.toJS()).to.deep.equal([1, 2, 3])
    expect(result.toJS()).to.deep.equal([1, 2, 3])
  })

  it('splices immutable list with only index=0, "removeNum" is undefined', function() {
    const data = Immutable.fromJS([1, 2, 3])
    const result = splice(data, 0)
    expect(data.toJS()).to.deep.equal([1, 2, 3])
    expect(result.toJS()).to.deep.equal([1, 2, 3])
  })

})
