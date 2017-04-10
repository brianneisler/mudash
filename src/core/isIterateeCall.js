import get from './get'
import isEqual from './isEqual'
import isObject from './isObject'

export default function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false
  }
  return isEqual(get(object, index), value)
}
