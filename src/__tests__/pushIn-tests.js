import 'babel-polyfill'
import { expect } from 'chai'
import pushIn from '../pushIn'

describe('pushIn', function() {

  it('treats empty string as a path of a mutable array', function() {
    const data = {}
    const result = pushIn(data, '', 'test1')
    expect(result).to.deep.equal({
      '': [
        'test1'
      ]
    })
  })

  it('pushes deep in mutable value', function() {
    const data = { a: [] }
    const result = pushIn(data, 'a', 'test1')
    expect(result).to.deep.equal({
      a: [
        'test1'
      ]
    })
  })

  it('pushes deep in mutable empty value', function() {
    const data = { a: null }
    const result = pushIn(data, 'a', 'test1')
    expect(result).to.deep.equal({
      a: [
        'test1'
      ]
    })
  })
})
