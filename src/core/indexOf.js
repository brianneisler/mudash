import _ from 'lodash'
import { baseIndexOf } from './base'
import { nativeMax } from './native'
import { getSize } from './util'
import isIndexed from './isIndexed'
import isOrdered from './isOrdered'
import toIndexed from './toIndexed'

export default function indexOf(data, value, fromIndex) {
  let indexed = data
  if (!isIndexed(data)) {
    if (!isOrdered(data)) {
      return -1
    }
    indexed = toIndexed(data)
  }
  const length = getSize(indexed)
  let index = fromIndex == null ? 0 : _.toInteger(fromIndex)
  if (index < 0) {
    index = nativeMax(length + index, 0)
  }
  return baseIndexOf(indexed, value, index)
}
