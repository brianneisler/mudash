import { baseDifference } from './base'
import flatten from './flatten'
import hintConvert from './hintConvert'
import isOrdered from './isOrdered'
import last from './last'

export default function differenceWith(data, ...values) {
  let comparator = last(values)
  if (isOrdered(comparator)) {
    comparator = undefined
  }
  return (isOrdered(data))
    ? baseDifference(data, flatten(values, 1, isOrdered, true), undefined, comparator)
    : hintConvert(data, [])
}
