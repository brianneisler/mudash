import { Iterable } from 'immutable'
import hasKey from './hasKey'
import isImmutable from './isImmutable'

export default function isOrdered(data) {
  return isImmutable(data)
    ? Iterable.isOrdered(data)
    : hasKey(data, 'length')
}
