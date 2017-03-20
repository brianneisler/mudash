import { baseEach, baseReduce } from './base'
import iteratee from './iteratee'

export default function reduce(data, _iteratee, accumulator) {
  const initAccum = arguments.length < 3
  return baseReduce(data, iteratee(_iteratee), accumulator, initAccum, baseEach)
}
