import _ from 'lodash'
import Immutable from 'immutable'
import baseIsEqualDeep from './baseIsEqualDeep'
import isImmutable from './isImmutable'

export default function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true
  }
  if (isImmutable(value) && isImmutable(other) && Immutable.is(value, other)) {
    return true
  }
  if (value == null || other == null || (!_.isObject(value) && !_.isObjectLike(other))) {
    return value !== value && other !== other
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack)
}
