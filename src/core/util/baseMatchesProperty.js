import { COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG } from '../constants'
import baseGet from './baseGet'
import baseHas from './baseHas'
import baseIsEqual from './baseIsEqual'
import isKey from './isKey'
import isStrictComparable from './isStrictComparable'
import matchesStrictComparable from './matchesStrictComparable'
import toKey from './toKey'

export default function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue)
  }
  return function(object) {
    const objValue = baseGet(object, path)
    return (objValue === undefined && objValue === srcValue)
      ? baseHas(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG)
  }
}
