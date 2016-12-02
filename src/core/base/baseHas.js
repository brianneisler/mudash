import getKey from '../getKey'
import toKey from '../toKey'

export default function baseHas(associative, path, hasKeyFunc) {
  let data = associative
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

  // const dataLength = data ? getSize(data) : 0
  // return !!length && _.isLength(length) && isIndex(key, length) &&
  //   (_.isArray(object) || _.isString(object) || _.isArguments(object))
}
