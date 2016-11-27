import _ from 'lodash'
import isImmutable from './isImmutable'

export default function reverse(data) {
  return isImmutable(data)
    ? data.reverse()
    : _.reverse(data)
}
