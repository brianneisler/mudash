import { Iterable } from 'immutable'
import isImmutable from './isImmutable'
import isObject from './isObject'

export default function isKeyed(data) {
  return isImmutable(data)
    ? Iterable.isKeyed(data)
    : isObject(data)
}
