import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function every(data, predicate) {
  predicate = iteratee(predicate)
  return isImmutable(data)
    ? data.every(predicate)
    : _.every(data, predicate)
}
