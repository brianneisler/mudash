import _ from 'lodash'
import baseForOwnRight from './baseForOwnRight'
import { getKey, getSize } from '../util'

export default function baseEachRight(data, iteratee) {
  if (data == null) {
    return data
  }
  if (!_.isArrayLike(data)) {
    return baseForOwnRight(data, iteratee)
  }
  let size = getSize(data)

  while (size--) {
    if (iteratee(getKey(data, size), size, data) === false) {
      break
    }
  }
  return data
}
