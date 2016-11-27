import 'babel-polyfill'
import { expect } from 'chai'
import { symbol } from '../'

describe('symbol', function() {

  it('symbol acts as an ES6 Symbol', function() {
    const data = {}
    const sym = symbol('test')
    data[sym] = 'value'
    data['test'] = 'value2'
    expect(data[sym]).to.equal('value')
    expect(data['test']).to.equal('value2')
  })
})
