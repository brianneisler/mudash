import getKey from '../getKey'
import getSize from '../util/getSize'

export default function baseIndexOfWith(array, value, fromIndex, comparator) {
  let index = fromIndex - 1
  const length = getSize(array)
  //const eqValue =
  while (++index < length) {
    if (comparator(getKey(array, index), value)) {
      return index
    }
  }
  return -1
}
