import _ from 'lodash'
import { baseUniq } from './base'
import isIndexed from './isIndexed'

export default function uniqWith(data, comparator) {
  comparator = _.isFunction(comparator) ? comparator : undefined
  return isIndexed(data)
    ? baseUniq(data, undefined, comparator)
    : []
}
