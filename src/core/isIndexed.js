import { Iterable } from 'immutable'
import isImmutable from './isImmutable'
import hasKey from './hasKey'

export default function isIndexed(data) {
  return isImmutable(data)
    ? Iterable.isIndexed(data)
    : hasKey(data, 'length')
}
