import _ from 'lodash'
import { property } from '../composers'

export default function groupBy(data, iteratee) {
  if (!_.isFunction(iteratee)) {
    iteratee = property(iteratee)
  }
  return data.sortBy(iteratee)
}
