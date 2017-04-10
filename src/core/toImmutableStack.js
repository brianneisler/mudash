import { Stack } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableStack from './isImmutableStack'
import isObject from './isObject'
import isString from './isString'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableStack(data) {
  if (isImmutableStack(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toStack()
  } else if (isString(data) || isArray(data)) {
    return Stack(data)
  } else if (isObject(data)) {
    return toImmutableIterable(data).toStack()
  }
  return Stack(data)
}
