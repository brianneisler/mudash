import _ from 'lodash'
import isImmutable from './isImmutable'
import { property } from '../composers'

export default function map(data, iteratee = _.identity) {
  if (!_.isFunction(iteratee)) {
    iteratee = property(iteratee)
  }
  return isImmutable(data)
    ? data.map(iteratee)
    : _.map(data, iteratee)
}
