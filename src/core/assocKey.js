import clone from './clone'
import getKey from './getKey'
import hasKey from './hasKey'
import isEqual from './isEqual'
import isImmutable from './isImmutable'

export default function assocKey(data, key, value) {
  const objValue = getKey(data, key)
  if (!(hasKey(data, key) && isEqual(objValue, value)) || (value === undefined && !(hasKey(data, key)))) {
    if (isImmutable(data)) {
      data = data.set(key, value)
    } else {
      data = clone(data)
      data[key] = value
    }
  }
  return data
}
