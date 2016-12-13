import { baseFlatten } from './base'
import { INFINITY } from './constants'
import hintConvert from './hintConvert'
import isIndexed from './isIndexed'

export default function flattenDeep(data) {
  return isIndexed(data) ? baseFlatten(data, INFINITY) : hintConvert(data, [])
}
