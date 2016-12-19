import getKey from '../util/getKey'

export default function strictLastIndexOf(indexed, value, fromIndex) {
  let index = fromIndex + 1
  while (index--) {
    if (getKey(indexed, index) === value) {
      return index
    }
  }
  return index
}
