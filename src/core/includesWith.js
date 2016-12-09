import _ from 'lodash'
import { baseIncludesWith } from './base'
import toIndexed from './toIndexed'

export default function includesWith(data, value, comparator, fromIndex) {
  const indexed = toIndexed(data)
  fromIndex = fromIndex ? _.toInteger(fromIndex) : 0
  return baseIncludesWith(indexed, value, comparator, fromIndex)
}
