import _ from '../'
import Immutable from 'immutable'

const result = _.chain(Immutable.Map({}))
  .set('a', 1)
  .set('b', 2)
  .set('c', 3)
  .value()

console.log(result) // Map { "a": 1, "b": 2, "c": 3 }
