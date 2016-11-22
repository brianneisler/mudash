import _ from 'lodash'
import isImmutable from './isImmutable'

export default function first(data) {
  return isImmutable(data)
    ? data.first()
    : _.first(data)
}
