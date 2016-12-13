import { baseFlatten } from './base'
import hintConvert from './hintConvert'
import isIndexed from './isIndexed'

export default function flatten(data) {
  return isIndexed(data) ? baseFlatten(data, 1) : hintConvert(data, [])
}
