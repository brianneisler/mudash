import _ from 'lodash'
import isFunction from './isFunction'
import isImmutable from './isImmutable'
import property from './property'

export default function sortBy(data, iteratee) {
  if (!isFunction(iteratee)) {
    iteratee = property(iteratee)
  }
  return isImmutable(data)
    ? data.sortBy(iteratee)
    : _.sortBy(data, iteratee)
}
