import _ from 'lodash'
import { baseIncludes } from './base'
import toIndexed from './toIndexed'

export default function includes(data, value, fromIndex) {
  const indexed = toIndexed(data)
  fromIndex = fromIndex ? _.toInteger(fromIndex) : 0
  return baseIncludes(indexed, value, fromIndex)
}
