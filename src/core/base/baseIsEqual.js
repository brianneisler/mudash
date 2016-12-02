import eq from '../eq'
import baseIsEqualDeep from './baseIsEqualDeep'

export default function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (eq(value, other)) {
    return true
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack)
}
