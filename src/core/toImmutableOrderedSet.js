import _ from 'lodash'
import { OrderedSet } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableOrderedSet from './isImmutableOrderedSet'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableOrderedSet(data) {
  if (isImmutableOrderedSet(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toOrderedSet()
  } else if (_.isString(data) || _.isArray(data)) {
    return OrderedSet(data)
  } else if (_.isObject(data)) {
    return toImmutableIterable(data).toOrderedSet()
  }
  return OrderedSet()
}
