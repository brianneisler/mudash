import _ from 'lodash'
import baseForOwn from './baseForOwn'
import { isForEachable } from '../util'

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
  const length = data.length
  let index = -1

  while (++index < length) {
    if (iteratee(data[index], index, data) === false) {
      break
    }
  }
  return data
}
