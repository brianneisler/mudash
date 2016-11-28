import _ from 'lodash'
import isImmutable from './isImmutable'
import arrayLikeKeys from './arrayLikeKeys'
import objectKeys from './objectKeys'

export default function baseKeys(data) {
  if (isImmutable(data)) {
    return data.keySeq()
  } else if (_.isArrayLike(data)) {
    return arrayLikeKeys(data)
  }
  return objectKeys(data)
}
