import baseForOwn from './baseForOwn'
import count from '../count'
import getKey from '../getKey'
import isArrayLike from '../isArrayLike'
import { isForEachable } from '../util'

export default function baseEach(data, iteratee) {
  if (data == null) {
    return data
  }
  if (!isArrayLike(data)) {
    if (isForEachable(data)) {
      data.forEach(iteratee)
      return data
    }
    return baseForOwn(data, iteratee)
  }
  const size = count(data)
  let index = -1

  while (++index < size) {
    if (iteratee(getKey(data, index), index, data) === false) {
      break
    }
  }
  return data
}
