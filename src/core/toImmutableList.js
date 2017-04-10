import { List } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableList from './isImmutableList'
import isObject from './isObject'
import isString from './isString'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableList(data) {
  if (isImmutableList(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toList()
  } else if (isString(data) || isArray(data)) {
    return List(data)
  } else if (isObject(data)) {
    return toImmutableIterable(data).toList()
  }
  return List()
}
