import each from './each'
import get from './get'
import hasKey from './hasKey'
import isEqualWith from './isEqualWith'
import isObject from './isObject'
import keys from './keys'
import size from './size'

export default function isShallowEqual(value, other) {
  return isEqualWith(value, other, shallowEqual)
}

function shallowEqual(value, other) {
  if (!isObject(value) || !isObject(other)) {
    return undefined
  }
  const valueKeys = keys(value)
  const otherKeys = keys(other)

  if (size(valueKeys) !== size(otherKeys)) {
    return false
  }

  let equal = true
  each(valueKeys, (key) => {
    if (!hasKey(other, key)) {
      equal = false
      return false
    }
    if (get(value, key) !== get(other, key)) {
      equal = false
      return false
    }
  })

  return equal
}
