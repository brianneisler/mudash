import _ from 'lodash'
import isImmutable from './isImmutable'

export default function last(data) {
  return isImmutable(data)
    ? data.last()
    : _.last(data)
}
