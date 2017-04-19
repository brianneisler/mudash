import { baseIncludesWith } from './base'
import toIndexed from './toIndexed'
import toInteger from './toInteger'

export default function includesWith(data, value, comparator, fromIndex) {
  const indexed = toIndexed(data)
  fromIndex = fromIndex ? toInteger(fromIndex) : 0
  return baseIncludesWith(indexed, value, comparator, fromIndex)
}
