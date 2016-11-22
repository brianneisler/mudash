import _ from 'lodash'
import isImmutable from './isImmutable'

export default function keys(data) {
  return isImmutable(data)
    ? data.keySeq()
    : _.keys(data)
}
