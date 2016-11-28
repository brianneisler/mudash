import _ from 'lodash'
import getKey from './getKey'
import isKey from './isKey'
import toKey from './toKey'

export default function baseGet(object, path, getFunc = getKey) {
  path = isKey(path, object) ? [path] : _.toPath(path)

  let index = 0
  const length = path.length

  while (object != null && index < length) {
    const key = toKey(path[index++])
    object = getFunc(object, key)
  }
  return (index && index == length) ? object : undefined
}
