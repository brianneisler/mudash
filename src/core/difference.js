import { baseDifference, baseFlatten } from './base'
import hintConvert from './hintConvert'
import isIndexed from './isIndexed'

export default function difference(data, ...values) {
  return (isIndexed(data))
    ? baseDifference(data, baseFlatten(values, 1, isIndexed, true))
    : hintConvert(data, [])
}
