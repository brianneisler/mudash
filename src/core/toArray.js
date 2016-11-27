import _ from 'lodash'
import isImmutable from './isImmutable'

export default function toArray(data) {
  return isImmutable(data)
    ? data.toArray()
    : _.toArray(data)
}
