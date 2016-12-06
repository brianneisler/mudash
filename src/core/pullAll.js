import { basePullAll } from './base'
import { getIteratee } from './util'
import isOrdered from './isOrdered'

export default function pullAll(data, values, iteratee, comparator) {
  //TODO BRN: Seems like values could be anything that has values (array, object, iterable, etc)
  return (isOrdered(data) && isOrdered(values))
    ? basePullAll(data, values, iteratee ? getIteratee(iteratee) : undefined, comparator)
    : data
}
