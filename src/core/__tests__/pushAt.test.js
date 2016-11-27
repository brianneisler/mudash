import 'babel-polyfill'
import { expect } from 'chai'
import { pushAt } from '../'

describe('pushAt', function() {

  it('treats empty string as a path of a mutable array', function() {
    const data = {}
    const result = pushAt(data, '', 'test1')
    expect(result).to.deep.equal({
      '': [
        'test1'
      ]
    })
  })

  it('pushes deep in mutable value', function() {
    const data = { a: [] }
    const result = pushAt(data, 'a', 'test1')
    expect(result).to.deep.equal({
      a: [
        'test1'
      ]
    })
  })

  it('pushes deep in mutable empty value', function() {
    const data = { a: null }
    const result = pushAt(data, 'a', 'test1')
    expect(result).to.deep.equal({
      a: [
        'test1'
      ]
    })
  })
})
