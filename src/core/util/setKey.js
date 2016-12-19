import baseIsEqual from '../base/baseIsEqual'
import isImmutable from '../isImmutable'
import getKey from './getKey'
import hasKey from './hasKey'

//WARNING: This is a MUTABLE function
export default function setKey(object, key, value) {
  const objValue = getKey(object, key)
  if (!(hasKey(object, key) && baseIsEqual(objValue, value)) || (value === undefined && !(hasKey(object, key)))) {
    if (isImmutable(object)) {
      object = object.set(key, value)
    } else {
      object[key] = value
    }
  }
  return object
}
