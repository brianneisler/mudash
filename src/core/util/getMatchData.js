import baseKeys from './baseKeys'
import getKey from './getKey'
import getSize from './getSize'
import isStrictComparable from './isStrictComparable'
import setKey from './setKey'

export default function getMatchData(object) {
  let result = baseKeys(object)
  let length = getSize(result)

  while (length--) {
    const key = getKey(result, length)
    const value = getKey(object, key)
    result = setKey(result, length, [key, value, isStrictComparable(value)])
  }
  return result
}
