import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function filter(data, predicate) {
  predicate = iteratee(predicate)
  return isImmutable(data)
    ? data.filter(predicate)
    : _.filter(data, predicate)
}
