import mutationPush from '../mutations/mutationPush'
import mutationPushAll from '../mutations/mutationPushAll'
import getKey from '../util/getKey'
import getSize from '../util/getSize'
import withMutations from '../with/withMutations'
import hintConvert from '../hintConvert'
import isFlattenable from '../isFlattenable'

const recurFlatten = (result, indexed, depth, predicate, isStrict) => {
  let index = -1
  const length = getSize(indexed)
  while (++index < length) {
    const value = getKey(indexed, index)
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        result = recurFlatten(result, value, depth - 1, predicate, isStrict)
      } else {
        result = mutationPushAll(result, value)
      }
    } else if (!isStrict) {
      result = mutationPush(result, value)
    }
  }
  return result
}

const flattenIndexed = withMutations(recurFlatten)

export default function baseFlatten(indexed, depth, predicate = isFlattenable, isStrict) {
  const result = hintConvert(indexed, [])
  return flattenIndexed(result, indexed, depth, predicate, isStrict)
}
