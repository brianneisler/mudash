import getKey from '../util/getKey'
import getSize from '../util/getSize'

export default function baseFor(iterable, iteratee, keysFunc) {
  let index = -1
  const props = keysFunc(iterable)
  let size = getSize(props)

  while (size--) {
    const key = getKey(props, ++index)
    if (iteratee(getKey(iterable, key), key, iterable) === false) {
      break
    }
  }
  return iterable
}
