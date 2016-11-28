import _ from 'lodash'
import { Stack } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableStack from './isImmutableStack'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableStack(data) {
  if (isImmutableStack(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toStack()
  } else if (_.isString(data) || _.isArray(data)) {
    return Stack(data)
  } else if (_.isObject(data)) {
    return toImmutableIterable(data).toStack()
  }
  return Stack(data)
}
