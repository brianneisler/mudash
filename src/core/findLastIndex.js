import { baseFindIndex } from './base'
import { nativeMax, nativeMin } from './native'
import { getIteratee } from './util'
import count from './count'
import isIndexed from './isIndexed'
import isOrdered from './isOrdered'
import toIndexed from './toIndexed'
import toInteger from './toInteger'

export default function findLastIndex(data, predicate, fromIndex) {
  let indexed = data
  if (!isIndexed(data)) {
    if (!isOrdered(data)) {
      return -1
    }
    indexed = toIndexed(data)
  }
  const length = count(indexed)
  if (!length) {
    return -1
  }
  let index = length - 1
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex)
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1)
  }
  return baseFindIndex(indexed, getIteratee(predicate), index, true)
}
