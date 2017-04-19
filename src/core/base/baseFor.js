import count from '../count'
import getKey from '../getKey'

export default function baseFor(iterable, iteratee, keysFunc) {
  let index = -1
  const props = keysFunc(iterable)
  let size = count(props)

  while (size--) {
    const key = getKey(props, ++index)
    if (iteratee(getKey(iterable, key), key, iterable) === false) {
      break
    }
  }
  return iterable
}
