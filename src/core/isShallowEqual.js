import _ from 'lodash'
import { hasKey } from './util'
import each from './each'
import get from './get'
import isEqualWith from './isEqualWith'
import keys from './keys'
import size from './size'

export default function isShallowEqual(value, other) {
  return isEqualWith(value, other, shallowEqual)
}

function shallowEqual(value, other) {
  if (!_.isObject(value) || !_.isObject(other)) {
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
