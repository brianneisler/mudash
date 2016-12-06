import { basePullAll } from './base'
import { getIteratee } from './util'
import isOrdered from './isOrdered'

export default function pullAllRight(data, values, iteratee, comparator) {
  return (isOrdered(data) && isOrdered(values))
    ? basePullAll(data, values, iteratee ? getIteratee(iteratee) : undefined, comparator, true)
    : data
}
