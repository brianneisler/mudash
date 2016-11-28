/* eslint-disable no-console */
import _ from '../'
import fp from '../fp'
import Immutable from 'immutable'

const list = Immutable.fromJS([1, 2, 3, 4])

const result = _.chunk(list, 2)   //List [ List [ 1, 2 ], List [ 3, 4 ] ]
console.log(result)

const result2 = fp.chunk(2)(list) //List [ List [ 1, 2 ], List [ 3, 4 ] ]
console.log(result2)
