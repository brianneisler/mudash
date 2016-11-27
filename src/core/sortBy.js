import _ from 'lodash'
import isImmutable from './isImmutable'
import property from './property'

export default function sortBy(data, iteratee) {
  if (!_.isFunction(iteratee)) {
    iteratee = property(iteratee)
  }
  return isImmutable(data)
    ? data.sortBy(iteratee)
    : _.sortBy(data, iteratee)
}
