import _ from 'lodash'
import { baseFlatten } from './base'
import hintConvert from './hintConvert'
import isIndexed from './isIndexed'

export default function flattenDepth(data, depth) {
  if (!isIndexed(data)) {
    return hintConvert(data, [])
  }
  depth = depth === undefined ? 1 : _.toInteger(depth)
  return baseFlatten(data, depth)
}
