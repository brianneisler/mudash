import { baseLastIndexOf } from './base'
import { nativeMax, nativeMin } from './native'
import count from './count'
import isIndexed from './isIndexed'
import isOrdered from './isOrdered'
import toIndexed from './toIndexed'
import toInteger from './toInteger'

export default function lastIndexOf(data, value, fromIndex) {
  let indexed = data
  if (!isIndexed(data)) {
    if (!isOrdered(data)) {
      return -1
    }
    indexed = toIndexed(data)
  }
  const length = count(indexed)
  let index = length
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex)
    index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)
  }
  return baseLastIndexOf(indexed, value, index)
}
