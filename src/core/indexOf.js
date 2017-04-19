import { baseIndexOf } from './base'
import { nativeMax } from './native'
import count from './count'
import isIndexed from './isIndexed'
import isOrdered from './isOrdered'
import toIndexed from './toIndexed'
import toInteger from './toInteger'

export default function indexOf(data, value, fromIndex) {
  let indexed = data
  if (!isIndexed(data)) {
    if (!isOrdered(data)) {
      return -1
    }
    indexed = toIndexed(data)
  }
  const length = count(indexed)
  let index = fromIndex == null ? 0 : toInteger(fromIndex)
  if (index < 0) {
    index = nativeMax(length + index, 0)
  }
  return baseIndexOf(indexed, value, index)
}
