import 'babel-polyfill'
import { expect } from 'chai'
import Immutable from 'immutable'
import { forEachRight } from '../'


describe('forEachRight:', function() {
  it('forEachRights over empty array with no method and returns the array', function() {
    const array = []
    const result = forEachRight(array)
    expect(result).to.equal(array) //expect same array
  })

  it('forEachRights over empty List with no method and returns the List', function() {
    const list = Immutable.List([])
    const result = forEachRight(list)
    expect(result).to.equal(list) //expect same List
  })

  it('forEachRights over array values and invokes method for each value', function() {
    const array = [1, 'a', null]
    const values = []
    const indexes = []
    const result = forEachRight(array, (value, index) => {
      values.push(value)
      indexes.push(index)
    })
    expect(result).to.equal(array) //expect same array
    expect(values).to.deep.equal([null, 'a', 1])
    expect(indexes).to.deep.equal([2, 1, 0])
  })

  it('forEachRights over List values and invokes method for each value', function() {
    const list = Immutable.List([1, 'a', null])
    const values = []
    const indexes = []
    const result = forEachRight(list, (value, index) => {
      values.push(value)
      indexes.push(index)
    })
    expect(result).to.equal(list) //expect same List
    expect(values).to.deep.equal([null, 'a', 1])
    expect(indexes).to.deep.equal([2, 1, 0])
  })

  it('forEachRight exits in array when false is returned', function() {
    const array = [1, 'a', null]
    const values = []
    const indexes = []
    const result = forEachRight(array, (value, index) => {
      values.push(value)
      indexes.push(index)
      if (value === 'a') {
        return false
      }
    })
    expect(result).to.equal(array) //expect same array
    expect(values).to.deep.equal([null, 'a'])
    expect(indexes).to.deep.equal([2, 1])
  })

  it('forEachRight exits in List when false is returned', function() {
    const list = Immutable.List([1, 'a', null])
    const values = []
    const indexes = []
    const result = forEachRight(list, (value, index) => {
      values.push(value)
      indexes.push(index)
      if (value === 'a') {
        return false
      }
    })
    expect(result).to.equal(list) //expect same List
    expect(values).to.deep.equal([null, 'a'])
    expect(indexes).to.deep.equal([2, 1])
  })
})
