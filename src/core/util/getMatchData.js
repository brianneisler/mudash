import baseKeys from '../base/baseKeys'
import count from '../count'
import getKey from '../getKey'
import setKey from '../setKey'
import isStrictComparable from './isStrictComparable'

export default function getMatchData(object) {
  let result = baseKeys(object)
  let length = count(result)

  while (length--) {
    const key = getKey(result, length)
    const value = getKey(object, key)
    result = setKey(result, length, [key, value, isStrictComparable(value)])
  }
  return result
}
