import eq from '../eq'
import getKey from '../getKey'
import getSize from '../util/getSize'
export default function assocIndexOf(indexedTupple, key) {
  let length = getSize(indexedTupple)
  while (length--) {
    if (eq(getKey(indexedTupple, length)[0], key)) {
      return length
    }
  }
  return -1
}
