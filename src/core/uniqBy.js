import { baseUniq } from './base'
import { getIteratee } from './util'
import isIndexed from './isIndexed'

export default function uniqBy(data, iteratee) {
  return isIndexed(data)
    ? baseUniq(data, getIteratee(iteratee))
    : []
}
