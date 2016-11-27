import _ from 'lodash'
import isImmutable from './isImmutable'
import iteratee from './iteratee'

export default function reduceRight(data, _iteratee, accumulator) {
  _iteratee = iteratee(_iteratee)
  return isImmutable(data)
    ? data.reduceRight(_iteratee, accumulator)
    : _.reduceRight(data, _iteratee, accumulator)
}
