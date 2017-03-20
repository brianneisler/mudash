import getKey from '../util/getKey'

export default function baseFor(iterable, iteratee, keysFunc) {
  let index = -1
  const props = keysFunc(iterable)
  let { length } = props

  while (length--) {
    const key = getKey(props, ++index)
    if (iteratee(getKey(iterable, key), key, iterable) === false) {
      break
    }
  }
  return iterable
}
