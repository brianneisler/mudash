import getKey from '../util/getKey'

export default function baseForRight(iterable, iteratee, keysFunc) {
  const props = keysFunc(iterable)
  let { length } = props

  while (length--) {
    const key = getKey(props, length)
    if (iteratee(getKey(iterable, key), key, iterable) === false) {
      break
    }
  }
  return iterable
}
