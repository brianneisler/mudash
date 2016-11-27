import _ from 'lodash'
import getKey from './getKey'
import isKey from './isKey'
import toKey from './toKey'

export default function baseUnset(data, path, unsetFunc, setFunc) {
  path = isKey(path, data) ? [path] : _.toPath(path)
  const index = 0
  return composeRecurPathUnset(path, unsetFunc, setFunc)(data, index)
}

function composeRecurPathUnset(path, unsetFunc, setFunc) {
  const length = path.length
  const lastIndex = length - 1

  const recurUnset = (data, index) => {
    if (!_.isObject(data)) {
      return data
    }
    const key = toKey(path[index])
    if (index != lastIndex) {
      let value = getKey(data, key)
      value = recurUnset(value, ++index)
      return setFunc(data, key, value)
    }
    return unsetFunc(data, key)
  }
  return recurUnset
}
