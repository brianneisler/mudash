import _ from 'lodash'
import isImmutable from './isImmutable'

export default function filterNot(data, predicate) {
  if (isImmutable(data)) {
    return data.filterNot(predicate)
  }
  return _.reject(data, predicate)
}
