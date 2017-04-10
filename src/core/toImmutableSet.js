import { Set } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableSet from './isImmutableSet'
import isObject from './isObject'
import isString from './isString'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableSet(data) {
  if (isImmutableSet(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toSet()
  } else if (isString(data) || isArray(data)) {
    return Set(data)
  } else if (isObject(data)) {
    return toImmutableIterable(data).toSet()
  }
  return Set(data)
}
