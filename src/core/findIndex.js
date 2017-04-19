import { baseFindIndex } from './base'
import { nativeMax } from './native'
import { getIteratee } from './util'
import count from './count'
import isIndexed from './isIndexed'
import isOrdered from './isOrdered'
import toIndexed from './toIndexed'
import toInteger from './toInteger'

export default function findIndex(data, predicate, fromIndex) {
  let indexed = data
  if (!isIndexed(data)) {
    if (!isOrdered(data)) {
      return -1
    }
    indexed = toIndexed(data)
  }
  const length = count(data)
  let index = fromIndex == null ? 0 : toInteger(fromIndex)
  if (index < 0) {
    index = nativeMax(length + index, 0)
  }
  return baseFindIndex(indexed, getIteratee(predicate), index)
}
