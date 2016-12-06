import getSize from '../util/getSize'
import withComparatorValue from '../with/withComparatorValue'
import withEqValue from '../with/withEqValue'
import getKey from '../getKey'
import map from '../map'
import splice from '../splice'
import baseFindIndex from './baseFindIndex'
import baseUnary from './baseUnary'

export default function basePullAll(data, values, iteratee, comparator, fromRight = false) {
  let index     = -1
  let seen      = data
  const length  = getSize(values)

  if (iteratee) {
    seen = map(data, baseUnary(iteratee))
  }
  while (++index < length) {
    const value       = getKey(values, index)
    const computed    = iteratee ? iteratee(value) : value
    const predicate   = comparator ? withComparatorValue(comparator, computed) : withEqValue(computed)
    const fromIndex   = fromRight ? getSize(seen) : 0
    const startIndex  = baseFindIndex(seen, predicate, fromIndex, fromRight)

    if (startIndex > -1) {
      seen = splice(seen, startIndex, 1)
      data = splice(data, startIndex, 1)
    }
  }
  return data
}
