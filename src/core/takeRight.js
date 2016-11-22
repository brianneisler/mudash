import _ from 'lodash'
import isImmutable from './isImmutable'

export default function takeRight(data, count = 1) {
  return isImmutable(data)
    ? data.takeLast(count)
    : _.takeRight(data, count)
}
