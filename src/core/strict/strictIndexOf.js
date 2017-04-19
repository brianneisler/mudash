import count from '../count'
import getKey from '../getKey'

export default function strictIndexOf(indexed, value, fromIndex) {
  let index = fromIndex - 1
  const length = count(indexed)

  while (++index < length) {
    if (getKey(indexed, index) === value) {
      return index
    }
  }
  return -1
}
