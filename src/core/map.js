import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function map(data, _iteratee) {
  _iteratee = iteratee(_iteratee)
  return isImmutable(data)
    ? data.map(_iteratee)
    : _.map(data, _iteratee)
}
