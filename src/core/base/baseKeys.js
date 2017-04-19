import arrayLikeKeys from '../array/arrayLikeKeys'
import objectKeys from '../object/objectKeys'
import isArrayLike from '../isArrayLike'
import isImmutable from '../isImmutable'

export default function baseKeys(data) {
  if (isImmutable(data)) {
    return data.keySeq()
  } else if (isArrayLike(data)) {
    return arrayLikeKeys(data)
  }
  return objectKeys(data)
}
