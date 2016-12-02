import _ from 'lodash'
import { OrderedMap } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableOrderedMap from './isImmutableOrderedMap'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableOrderedMap(data) {
  if (isImmutableOrderedMap(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toOrderedMap()
  } else if (_.isString(data) || _.isArray(data)) {
    return toImmutableIterable(data).toOrderedMap()
  } else if (_.isObject(data)) {
    return OrderedMap(data)
  }
  return OrderedMap()
}
