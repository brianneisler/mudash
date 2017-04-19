import count from '../count'
import eq from '../eq'
import getKey from '../getKey'

export default function assocIndexOf(indexedTupple, key) {
  let length = count(indexedTupple)
  while (length--) {
    if (eq(getKey(indexedTupple, length)[0], key)) {
      return length
    }
  }
  return -1
}
