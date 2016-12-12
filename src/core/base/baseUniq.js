import Immutable from 'immutable'
import cacheHas from '../cache/cacheHas'
import getSize from '../util/getSize'
import withMutations from '../with/withMutations'
import baseIncludes from './baseIncludes'
import baseIncludesWith from './baseIncludesWith'
import getKey from '../getKey'
import hintConvert from '../hintConvert'

//TODO BRN: This method should try to preserve the original immutable type. Right now it just returns a List
export default function baseUniq(indexed, iteratee, comparator) {
  let includes = baseIncludes
  const result = hintConvert(indexed, [])
  let seen = []

  if (comparator) {
    includes = baseIncludesWith
  } else {
    includes = cacheHas
    seen = new Immutable.Set()
  }
  return findUniques(result, indexed, seen, iteratee, comparator, includes)
}

const findUniques = withMutations((result, indexed, seen, iteratee, comparator, includes) => {
  const length = getSize(indexed)
  let index = -1
  while (++index < length) {
    let value = getKey(indexed, index)
    const computed = iteratee ? iteratee(value) : value

    // Resetting for -0
    value = (comparator || value !== 0) ? value : 0

    if (!includes(seen, computed, comparator)) {
      seen = seen.add(computed)
      result.push(value)
    }
  }
  return result
})
