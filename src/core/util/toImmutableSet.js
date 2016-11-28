import _ from 'lodash'
import { Set } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableSet from './isImmutableSet'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableSet(data) {
  if (isImmutableSet(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toSet()
  } else if (_.isString(data) || _.isArray(data)) {
    return Set(data)
  } else if (_.isObject(data)) {
    return toImmutableIterable(data).toSet()
  }
  return Set(data)
}
