import { baseDifference } from './base'
import { getIteratee } from './util'
import flatten from './flatten'
import hintConvert from './hintConvert'
import isOrdered from './isOrdered'
import last from './last'

export default function differenceBy(data, ...values) {
  let iteratee = last(values)
  if (isOrdered(iteratee)) {
    iteratee = undefined
  }
  return (isOrdered(data))
    ? baseDifference(data, flatten(values, 1, isOrdered, true), getIteratee(iteratee, 2))
    : hintConvert(data, [])
}
