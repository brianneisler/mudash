import _ from 'lodash'
import { List } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableList from './isImmutableList'
import toImmutableIterable from './toImmutableIterable'

export default function toImmutableList(data) {
  if (isImmutableList(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toList()
  } else if (_.isString(data) || _.isArray(data)) {
    return List(data)
  } else if (_.isObject(data)) {
    return toImmutableIterable(data).toList()
  }
  return List()
}
