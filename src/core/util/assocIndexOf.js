import eq from './eq'
export default function assocIndexOf(array, key) {
  let { length } = array
  while (length--) {
    if (eq(array[length][0], key)) {
      return length
    }
  }
  return -1
}
