import _ from 'lodash'
import isImmutable from './isImmutable'

export default function baseClone(data) {
  return isImmutable(data)
    ? data
    : _.clone(data)
}
