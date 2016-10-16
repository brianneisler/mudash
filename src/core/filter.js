import _ from 'lodash'
import isImmutable from './isImmutable'

export default function filter(data, predicate) {
  if (isImmutable(data)) {
    return data.filter(predicate)
  }
  return _.filter(data, predicate)
}
