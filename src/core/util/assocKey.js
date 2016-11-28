import baseClone from './baseClone'
import baseIsEqual from './baseIsEqual'
import getKey from './getKey'
import hasKey from './hasKey'
import isImmutable from './isImmutable'

export default function assocKey(data, key, value) {
  const dataValue = getKey(data, key)
  if (!(hasKey(data, key) && baseIsEqual(dataValue, value)) || (value === undefined && !(hasKey(data, key)))) {
    if (isImmutable(data)) {
      data = data.set(key, value)
    } else {
      data = baseClone(data)
      data[key] = value
    }
  }
  return data
}
