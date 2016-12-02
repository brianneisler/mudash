import _ from 'lodash'
import { Iterable } from 'immutable'
import isImmutable from './isImmutable'

export default function isKeyed(data) {
  return isImmutable(data)
    ? Iterable.isKeyed(data)
    : _.isObject(data)
}
