import _ from 'lodash'
import isImmutable from './isImmutable'

export default function some(data, predicate = _.identity) {
  return isImmutable(data)
    ? data.some(predicate)
    : _.some(data, predicate)
}
