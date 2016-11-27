import _ from 'lodash'
import isImmutable from './isImmutable'

export default function dropRight(data) {
  return isImmutable(data)
    ? data.butLast()
    : _.dropRight(data)
}
