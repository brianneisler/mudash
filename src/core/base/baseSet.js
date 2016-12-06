import _ from 'lodash'
import castPath from '../util/castPath'
import getKey from '../getKey'
import isImmutable from '../isImmutable'
import isIndex from '../isIndex'
import toImmutable from '../toImmutable'
import toKey from '../toKey'

export default function baseSet(data, path, value, setFunc, options = {}) {
  path = castPath(path)
  const index = 0
  return withRecurPathSet(path, setFunc, options)(data, index, value)
}

function withRecurPathSet(path, setFunc, { customizer }) {
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
        newValue = _.isObject(objValue)
          ? objValue
          : (isImmutable(data) ? toImmutable(custom) : custom)
      }
      newValue = recurSet(newValue, ++index, value)
    }
    return setFunc(data, key, newValue)
  }
  return recurSet
}
