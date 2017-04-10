import { Map } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableMap from './isImmutableMap'
import isObject from './isObject'
import isString from './isString'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableMap(data) {
  if (isImmutableMap(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toMap()
  } else if (isString(data) || isArray(data)) {
    return toImmutableIterable(data).toMap()
  } else if (isObject(data)) {
    return Map(data)
  }
  return Map()
}
