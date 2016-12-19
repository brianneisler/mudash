import baseClone from '../base/baseClone'
import hasKey from './hasKey'
import isImmutable from '../isImmutable'

export default function dissocKey(data, key) {
  if (hasKey(data, key)) {
    if (isImmutable(data)) {
      data = data.delete(key)
    } else {
      data = baseClone(data)
      delete data[key]
    }
  }
  return data
}
