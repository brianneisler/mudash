import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function reduceRight(data, _iteratee, accumulator) {
  const initAccum = arguments.length < 3
  _iteratee = iteratee(_iteratee)
  if (isImmutable(data)) {
    return data.reduceRight(_iteratee, accumulator)
  }
  if (initAccum) {
    return _.reduceRight(data, _iteratee)
  }
  return _.reduceRight(data, _iteratee, accumulator)
}
