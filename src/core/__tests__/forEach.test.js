import 'babel-polyfill'
import { expect } from 'chai'
import Immutable from 'immutable'
import { forEach } from '../'


describe('forEach:', function() {
  it('forEachs over empty array with no method and returns the array', function() {
    const array = []
    const result = forEach(array)
    expect(result).to.equal(array) //expect same array
  })

  it('forEachs over empty List with no method and returns the List', function() {
    const list = Immutable.List([])
    const result = forEach(list)
    expect(result).to.equal(list) //do no modify List
  })

  it('forEachs over array values and invokes method for each value', function() {
    const array = [1, 'a', null]
    const values = []
    const indexes = []
    const result = forEach(array, (value, index) => {
      values.push(value)
      indexes.push(index)
    })
    expect(result).to.equal(array) //expect same array
    expect(values).to.deep.equal([1, 'a', null])
    expect(indexes).to.deep.equal([0, 1, 2])
  })

  it('forEachs over List values and invokes method for each value', function() {
    const list = Immutable.List([1, 'a', null])
    const values = []
    const indexes = []
    const result = forEach(list, (value, index) => {
      values.push(value)
      indexes.push(index)
    })
    expect(result).to.equal(list) //expect same List
    expect(values).to.deep.equal([1, 'a', null])
    expect(indexes).to.deep.equal([0, 1, 2])
  })

  it('forEach exits in array when false is returned', function() {
    const array = [1, 'a', null]
    const values = []
    const indexes = []
    const result = forEach(array, (value, index) => {
      values.push(value)
      indexes.push(index)
      if (value === 'a') {
        return false
      }
    })
    expect(result).to.equal(array) //expect same array
    expect(values).to.deep.equal([1, 'a'])
    expect(indexes).to.deep.equal([0, 1])
  })

  it('forEach exits in List when false is returned', function() {
    const list = Immutable.List([1, 'a', null])
    const values = []
    const indexes = []
    const result = forEach(list, (value, index) => {
      values.push(value)
      indexes.push(index)
      if (value === 'a') {
        return false
      }
    })
    expect(result).to.equal(list) //expect same array
    expect(values).to.deep.equal([1, 'a'])
    expect(indexes).to.deep.equal([0, 1])
  })
})
