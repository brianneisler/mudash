import { baseIncludes } from './base'
import toIndexed from './toIndexed'
import toInteger from './toInteger'

export default function includes(data, value, fromIndex) {
  const indexed = toIndexed(data)
  fromIndex = fromIndex ? toInteger(fromIndex) : 0
  return baseIncludes(indexed, value, fromIndex)
}
