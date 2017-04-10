import { OrderedSet } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableOrderedSet from './isImmutableOrderedSet'
import isObject from './isObject'
import isString from './isString'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableOrderedSet(data) {
  if (isImmutableOrderedSet(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toOrderedSet()
  } else if (isString(data) || isArray(data)) {
    return OrderedSet(data)
  } else if (isObject(data)) {
    return toImmutableIterable(data).toOrderedSet()
  }
  return OrderedSet()
}
