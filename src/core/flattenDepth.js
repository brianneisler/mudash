import { baseFlatten } from './base'
import hintConvert from './hintConvert'
import isIndexed from './isIndexed'
import toInteger from './toInteger'

export default function flattenDepth(data, depth) {
  if (!isIndexed(data)) {
    return hintConvert(data, [])
  }
  depth = depth === undefined ? 1 : toInteger(depth)
  return baseFlatten(data, depth)
}
