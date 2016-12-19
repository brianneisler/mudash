import { Stack } from '../cache'
import { COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG } from '../constants'
import { _Object } from '../context'
import getKey from '../util/getKey'
import getSize from '../util/getSize'
import hasKeyIn from '../util/hasKeyIn'
import baseIsEqual from './baseIsEqual'

export default function baseIsMatch(object, source, matchData, customizer) {
  let index = getSize(matchData)
  const length = index
  const noCustomizer = !customizer
  let data

  if (object == null) {
    return !length
  }
  object = _Object(object)
  while (index--) {
    data = getKey(matchData, index)
    if ((noCustomizer && getKey(data, 2))
          ? getKey(data, 1) !== getKey(object, getKey(data, 0))
          : !(hasKeyIn(object, getKey(data, 0)))
        ) {
      return false
    }
  }
  while (++index < length) {
    data = getKey(matchData, index)
    const key = getKey(data, 0)
    const objValue = getKey(object, key)
    const srcValue = getKey(data, 1)

    if (noCustomizer && getKey(data, 2)) {
      if (objValue === undefined && !(hasKeyIn(object, key))) {
        return false
      }
    } else {
      const stack = new Stack
      let result
      if (customizer) {
        result = customizer(objValue, srcValue, key, object, source, stack)
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false
      }
    }
  }
  return true
}
