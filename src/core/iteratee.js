import _ from 'lodash'
import identity from './identity'
import matches from './matches'
import property from './property'

export default function iteratee(func) {
  if (_.isFunction(func)) {
    return func
  }
  if (func == null) {
    return identity
  }
  return (_.isObject(func) ? matches : property)(func)
}
