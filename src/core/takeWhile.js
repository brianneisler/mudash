import _ from 'lodash'
import isImmutable from './isImmutable'

export default function takeWhile(data, predicate = _.identity) {
  return isImmutable(data)
    ? data.takeWhile(predicate)
    : _.takeWhile(data, predicate)
}
