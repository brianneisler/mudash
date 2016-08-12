import _ from 'lodash'
import Immutable from 'immutable'
import isImmutable from './isImmutable'

export default function isEqual(value, other) {
  return (isImmutable(value) && isImmutable(other)) ? Immutable.is(value, other) : _.isEqual(value, other)
}
