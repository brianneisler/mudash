import _ from 'lodash'
import isImmutable from './isImmutable'

export default function reduceRight(data, iteratee, accumulator) {
  return isImmutable(data)
    ? data.reduceRight(iteratee, accumulator)
    : _.reduceRight(data, iteratee, accumulator)
}
