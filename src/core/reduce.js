import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function reduce(data, _iteratee, accumulator) {
  _iteratee = iteratee(_iteratee)
  return isImmutable(data)
    ? data.reduce(_iteratee, accumulator)
    : _.reduce(data, _iteratee, accumulator)
}
