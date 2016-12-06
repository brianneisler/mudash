import _ from 'lodash'
import { baseFindIndex } from './base'
import { nativeMax, nativeMin } from './native'
import { getIteratee, getSize } from './util'
import isIndexed from './isIndexed'
import isOrdered from './isOrdered'
import toIndexed from './toIndexed'

export default function findLastIndex(data, predicate, fromIndex) {
  let indexed = data
  if (!isIndexed(data)) {
    if (!isOrdered(data)) {
      return -1
    }
    indexed = toIndexed(data)
  }
  const length = getSize(indexed)
  if (!length) {
    return -1
  }
  let index = length - 1
  if (fromIndex !== undefined) {
    index = _.toInteger(fromIndex)
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1)
  }
  return baseFindIndex(indexed, getIteratee(predicate), index, true)
}
