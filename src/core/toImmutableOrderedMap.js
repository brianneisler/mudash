import { OrderedMap } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableOrderedMap from './isImmutableOrderedMap'
import isObject from './isObject'
import isString from './isString'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableOrderedMap(data) {
  if (isImmutableOrderedMap(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toOrderedMap()
  } else if (isString(data) || isArray(data)) {
    return toImmutableIterable(data).toOrderedMap()
  } else if (isObject(data)) {
    return OrderedMap(data)
  }
  return OrderedMap()
}
