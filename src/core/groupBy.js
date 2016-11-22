import _ from 'lodash'
import isImmutable from './isImmutable'
import { property } from '../composers'

export default function groupBy(data, iteratee = _.identity) {
  if (!_.isFunction(iteratee)) {
    iteratee = property(iteratee)
  }
  return isImmutable(data)
    ? data.groupBy(iteratee)
    : _.groupBy(data, iteratee)
}
