/* eslint-disable no-console */
/* eslint-disable no-undef */
import _ from 'mudash'

describe('set', () => {
  example('setting an existing array index', () => {
    const array = ['a', 'b', 'c']
    const result = _.set(array, 2, 'd')
    console.log(array)    // ['a', 'b', 'c']
    console.log(result)   // ['a', 'b', 'd']
  })
})
