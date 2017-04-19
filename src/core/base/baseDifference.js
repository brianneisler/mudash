import Immutable from 'immutable'
import cacheHas from '../cache/cacheHas'
import mutationPush from '../mutations/mutationPush'
import withMutations from '../with/withMutations'
import count from '../count'
import getKey from '../getKey'
import hintConvert from '../hintConvert'
import map from '../map'
import baseIncludes from './baseIncludes'
import baseIncludesWith from './baseIncludesWith'
import baseUnary from './baseUnary'

const findDifference = withMutations((result, indexed, values, iteratee, comparator, includes) => {
  let index = -1
  const length = count(indexed)
  if (!length) {
    return result
  }
  while (++index < length) {
    let value = getKey(indexed, index)
    const computed = iteratee ? iteratee(value) : value

    value = (comparator || value !== 0) ? value : 0
    if (!includes(values, computed, comparator)) {
      result = mutationPush(result, value)
    }
  }
  return result
})


export default function baseDifference(indexed, values, iteratee, comparator) {
  let includes = baseIncludes
  const result = hintConvert(indexed, [])

  if (iteratee) {
    values = map(indexed, baseUnary(iteratee))
  }
  if (comparator) {
    includes = baseIncludesWith
  } else {
    includes = cacheHas
    values = new Immutable.Set(values)
  }
  return findDifference(result, indexed, values, iteratee, comparator, includes)
}
