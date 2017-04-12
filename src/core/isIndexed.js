import { Iterable } from 'immutable'
import hasKey from './hasKey'
import isFunction from './isFunction'
import isImmutable from './isImmutable'

export default function isIndexed(data) {
  return isImmutable(data)
    ? Iterable.isIndexed(data)
    : hasKey(data, 'length') && !isFunction(data)
}
