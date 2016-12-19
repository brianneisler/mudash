import baseClone from '../base/baseClone'
import baseIsEqual from '../base/baseIsEqual'
import getKey from './getKey'
import hasKey from './hasKey'
import isImmutable from '../isImmutable'
import isImmutableSeq from '../isImmutableSeq'
import isImmutableStack from '../isImmutableStack'
import isKeyed from '../isKeyed'

export default function assocKey(data, key, value) {
  const dataValue = getKey(data, key)
  if (!(hasKey(data, key) && baseIsEqual(dataValue, value)) || (value === undefined && !(hasKey(data, key)))) {
    if (isImmutable(data)) {
      if (isImmutableSeq(data)) {
        if (isKeyed(data)) {
          //TODO BRN: This is SLOW... figure out a better way
          data = data.map((othValue, othKey) => othKey === key ? value : othValue)
        } else {
          data = data.splice(key, 1, value)
        }
      } else if (isImmutableStack(data)) {
        data = data.splice(key, 1, value)
      } else {
        data = data.set(key, value)
      }
    } else {
      data = baseClone(data)
      data[key] = value
    }
  }
  return data
}
