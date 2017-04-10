import castPath from '../util/castPath'
import getKey from '../util/getKey'
import toKey from '../util/toKey'
import isImmutable from '../isImmutable'
import isIndex from '../isIndex'
import toImmutable from '../toImmutable'
import isObject from '../isObject'

export default function baseSet(data, path, value, setKeyFunc, options = {}) {
  path = castPath(path)
  const index = 0
  return withRecurPathSet(path, setKeyFunc, options)(data, index, value)
}

function withRecurPathSet(path, setKeyFunc, { customizer }) {
  const length = path.length
  const lastIndex = length - 1

  const recurSet = (data, index, value) => {
    if (!isObject(data)) {
      return data
    }

    const key = toKey(path[index])
    let newValue = value
    if (index != lastIndex) {
      const objValue = getKey(data, key)
      const custom = isIndex(path[index + 1]) ? [] : {}
      newValue = customizer ? customizer(objValue, key, data) : undefined
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isImmutable(data) ? toImmutable(custom) : custom)
      }
      newValue = recurSet(newValue, ++index, value)
    }
    return setKeyFunc(data, key, newValue)
  }
  return recurSet
}
