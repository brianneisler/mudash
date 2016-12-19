import getKey from '../util/getKey'
import getSize from '../util/getSize'

export default function baseFindIndex(indexed, predicate, fromIndex, fromRight = false) {
  const length = getSize(indexed)
  if (!length) {
    return -1
  }
  if (fromIndex > length) {
    fromIndex = length - 1
  }
  let index = fromIndex + (fromRight ? 1 : -1)

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(getKey(indexed, index), index, indexed)) {
      return index
    }
  }
  return -1
}
