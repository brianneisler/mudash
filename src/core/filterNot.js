import _ from 'lodash'
import isImmutable from './isImmutable'

export default function filterNot(data, predicate) {
  return isImmutable(data)
    ? data.filterNot(predicate)
    : _.reject(data, predicate)
}
