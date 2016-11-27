import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function some(data, predicate) {
  predicate = iteratee(predicate)
  return isImmutable(data)
    ? data.some(predicate)
    : _.some(data, predicate)
}
