import eq from '../eq'
import isObjectLike from '../isObjectLike'
import baseIsEqualDeep from './baseIsEqualDeep'

export default function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (eq(value, other)) {
    return true
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return false
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack)
}
