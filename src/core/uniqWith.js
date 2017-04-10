import { baseUniq } from './base'
import isFunction from './isFunction'
import isIndexed from './isIndexed'

export default function uniqWith(data, comparator) {
  comparator = isFunction(comparator) ? comparator : undefined
  return isIndexed(data)
    ? baseUniq(data, undefined, comparator)
    : []
}
