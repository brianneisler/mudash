/* eslint-disable no-console */
import _ from '../'
import fp from '../fp'
import Immutable from 'immutable'

const set = _.compose(
  fp.set('a', 1),
  fp.set('b', 2),
  fp.set('c', 3)
)
const result = set(Immutable.Map({}))
console.log(result) // Map { a: 1, b: 2, c: 3 }
