import getKey from '../util/getKey'
import size from '../size'

export default function strictIndexOf(indexed, value, fromIndex) {
  let index = fromIndex - 1
  const length = size(indexed)

  while (++index < length) {
    if (getKey(indexed, index) === value) {
      return index
    }
  }
  return -1
}
