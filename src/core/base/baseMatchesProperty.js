import { COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG } from '../constants'
import isStrictComparable from '../util/isStrictComparable'
import matchesStrictComparable from '../util/matchesStrictComparable'
import toKey from '../util/toKey'
import has from '../has'
import isKey from '../isKey'
import baseGet from './baseGet'
import baseIsEqual from './baseIsEqual'

export default function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue)
  }
  return function(data) {
    const dataValue = baseGet(data, path)
    return (dataValue === undefined && dataValue === srcValue)
      ? has(data, path)
      : baseIsEqual(srcValue, dataValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG)
  }
}
