import { SetCache } from '../cache'
import { COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG } from '../constants'
import arraySome from './arraySome'
import cacheHas from './cacheHas'
import getKey from './getKey'

export default function baseEqualArrays(array, other, bitmask, customizer, equalFunc, stack) {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG
  const arrLength = array.length
  const othLength = other.length

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false
  }
  // Assume cyclic values are equal.
  const stacked = stack.get(array)
  if (stacked && stack.get(other)) {
    return stacked == other
  }
  let index = -1
  let result = true
  const seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined

  stack.set(array, other)
  stack.set(other, array)

  // Ignore non-index properties.
  while (++index < arrLength) {
    const arrValue = getKey(array, index)
    const othValue = getKey(other, index)
    let compared
    if (customizer) {
      compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack)
    }
    if (compared !== undefined) {
      if (compared) {
        continue
      }
      result = false
      break
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, (subValue, othIndex) => {
        if (!cacheHas(seen, othIndex) &&
        (arrValue === subValue || equalFunc(arrValue, subValue, bitmask, customizer, stack))) {
          return seen.push(othIndex)
        }
      })) {
        result = false
        break
      }
    } else if (!(
      arrValue === othValue ||
      equalFunc(arrValue, othValue, bitmask, customizer, stack)
    )) {
      result = false
      break
    }
  }
  stack['delete'](array)
  stack['delete'](other)
  return result
}
