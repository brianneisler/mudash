import getKey from '../getKey'
import toKey from '../toKey'

export default function baseHas(data, path, hasKeyFunc) {
  let result = false
  let index = -1
  const { length } = path

  while (++index < length) {
    const key = toKey(path[index])
    if (!(result = hasKeyFunc(data, key))) {
      break
    }
    data = getKey(data, key)
  }
  return result
}
