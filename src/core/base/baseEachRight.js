import count from '../count'
import getKey from '../getKey'
import isArrayLike from '../isArrayLike'
import baseForOwnRight from './baseForOwnRight'

export default function baseEachRight(data, iteratee) {
  if (data == null) {
    return data
  }
  if (!isArrayLike(data)) {
    return baseForOwnRight(data, iteratee)
  }
  let size = count(data)

  while (size--) {
    if (iteratee(getKey(data, size), size, data) === false) {
      break
    }
  }
  return data
}
