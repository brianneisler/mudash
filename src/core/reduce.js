import _ from 'lodash'
import isImmutable from './isImmutable'

export default function reduce(data, iteratee, accumulator) {
  return isImmutable(data)
    ? data.reduce(iteratee, accumulator)
    : _.reduce(data, iteratee, accumulator)
}
