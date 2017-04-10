import getKey from '../util/getKey'
import getSize from '../util/getSize'

export default function baseForRight(iterable, iteratee, keysFunc) {
  const props = keysFunc(iterable)
  let size = getSize(props)

  while (size--) {
    const key = getKey(props, size)
    if (iteratee(getKey(iterable, key), key, iterable) === false) {
      break
    }
  }
  return iterable
}
