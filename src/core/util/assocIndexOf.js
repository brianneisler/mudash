import getKey from '../util/getKey'
import getSize from '../util/getSize'
import eq from '../eq'

export default function assocIndexOf(indexedTupple, key) {
  let length = getSize(indexedTupple)
  while (length--) {
    if (eq(getKey(indexedTupple, length)[0], key)) {
      return length
    }
  }
  return -1
}
