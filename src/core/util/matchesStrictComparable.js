import { _Object } from './context'
import getKey from './getKey'
import hasKeyIn from './hasKeyIn'

export default function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false
    }
    return getKey(object, key) === srcValue &&
      (srcValue !== undefined || hasKeyIn(_Object(object), key))
  }
}
