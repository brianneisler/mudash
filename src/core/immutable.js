import isArray from './isArray'
import isMutable from './isMutable'
import isObjectLike from './isObjectLike'
import toImmutable from './toImmutable'

export default function immutable(data) {
  return isMutable(data) && (isObjectLike(data) || isArray(data)) ?
    toImmutable(data) : data
}
