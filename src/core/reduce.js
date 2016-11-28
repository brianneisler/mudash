import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function reduce(data, _iteratee, accumulator) {
  const initAccum = arguments.length < 3
  _iteratee = iteratee(_iteratee)
  if (isImmutable(data)) {
    return data.reduce(_iteratee, accumulator)
  }
  if (initAccum) {
    return _.reduce(data, _iteratee)
  }
  return _.reduce(data, _iteratee, accumulator)
}
