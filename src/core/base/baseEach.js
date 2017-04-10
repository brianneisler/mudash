import _ from 'lodash'
import baseForOwn from './baseForOwn'
import { getKey, getSize, isForEachable } from '../util'

export default function baseEach(data, iteratee) {
  if (data == null) {
    return data
  }
  if (!_.isArrayLike(data)) {
    if (isForEachable(data)) {
      data.forEach(iteratee)
      return data
    }
    return baseForOwn(data, iteratee)
  }
  const size = getSize(data)
  let index = -1

  while (++index < size) {
    if (iteratee(getKey(data, index), index, data) === false) {
      break
    }
  }
  return data
}
