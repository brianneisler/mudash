import _ from 'lodash'
import { Map } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableMap from './isImmutableMap'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableMap(data) {
  if (isImmutableMap(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toMap()
  } else if (_.isString(data) || _.isArray(data)) {
    return toImmutableIterable(data).toMap()
  } else if (_.isObject(data)) {
    return Map(data)
  }
  return Map()
}
