import _ from 'lodash'
import isImmutable from './isImmutable'

export default function getSize(data) {
  return isImmutable(data)
    ? data.count()
    : _.size(data)
}
