import _ from 'lodash'
import isImmutable from './isImmutable'

export default function clone(data) {
  return isImmutable(data)
    ? data
    : _.clone(data)
}
