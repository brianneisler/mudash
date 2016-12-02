import baseKeys from '../base/baseKeys'
import getKey from '../getKey'
import setKey from '../setKey'
import getSize from './getSize'
import isStrictComparable from './isStrictComparable'

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
