import _ from 'lodash'
import getKey from './getKey'
import isImmutable from './isImmutable'
import isIndex from './isIndex'
import isKey from './isKey'
import toImmutable from './toImmutable'
import toKey from './toKey'

export default function baseSet(data, path, value, setFunc, customizer) {
  path = isKey(path, data) ? [path] : _.toPath(path)
  const index = 0
  return composeRecurPathSet(path, setFunc, customizer)(data, index, value)
}

function composeRecurPathSet(path, setFunc, customizer) {
  const length = path.length
  const lastIndex = length - 1

  const recurSet = (data, index, value) => {
    if (!_.isObject(data)) {
      return data
    }

    const key = toKey(path[index])
    let newValue = value
    if (index != lastIndex) {
      const objValue = getKey(data, key)
      const custom = isIndex(path[index + 1]) ? [] : {}
      newValue = customizer ? customizer(objValue, key, data) : undefined
      if (newValue === undefined) {
        newValue = objValue == null
          ? (isImmutable(data) ? toImmutable(custom) : custom)
          : objValue
      }
      newValue = recurSet(newValue, ++index, value)
    }
    return setFunc(data, key, newValue)
  }
  return recurSet
}
