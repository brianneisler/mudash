import Immutable from 'immutable'
import cacheHas from '../cache/cacheHas'
import mutationPush from '../mutations/mutationPush'
import withMutations from '../with/withMutations'
import count from '../count'
import getKey from '../getKey'
import hintConvert from '../hintConvert'
import baseIncludes from './baseIncludes'
import baseIncludesWith from './baseIncludesWith'

const findUniques = withMutations((result, indexed, seen, iteratee, comparator, includes) => {
  const length = count(indexed)
  let index = -1
  while (++index < length) {
    let value = getKey(indexed, index)
    const computed = iteratee ? iteratee(value) : value

    // Resetting for -0
    value = (comparator || value !== 0) ? value : 0

    if (!includes(seen, computed, comparator)) {
      seen = seen.add(computed)
      mutationPush(result, value)
    }
  }
  return result
})

//TODO BRN: Should this method should try to preserve the original immutable type? Right now it just returns a List
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
