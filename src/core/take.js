import _ from 'lodash'
import isImmutable from './isImmutable'

export default function take(data, count = 1) {
  return isImmutable(data)
    ? data.take(count)
    : _.take(data, count)
}
