import count from '../count'
import getKey from '../getKey'

export default function baseForRight(iterable, iteratee, keysFunc) {
  const props = keysFunc(iterable)
  let size = count(props)

  while (size--) {
    const key = getKey(props, size)
    if (iteratee(getKey(iterable, key), key, iterable) === false) {
      break
    }
  }
  return iterable
}
