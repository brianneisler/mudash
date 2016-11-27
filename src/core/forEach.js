import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function forEach(data, _iteratee) {
  _iteratee = iteratee(_iteratee)
  isImmutable(data)
    ? data.forEach(_iteratee)
    : _.forEach(data, _iteratee)
  return data
}
