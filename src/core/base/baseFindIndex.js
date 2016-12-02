import getSize from '../util/getSize'
import getKey from '../getKey'
export default function baseFindIndex(indexed, predicate, fromIndex, fromRight = false) {
  const length = getSize(indexed)
  let index = fromIndex + (fromRight ? 1 : -1)

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(getKey(indexed, index), index, indexed)) {
      return index
    }
  }
  return -1
}
