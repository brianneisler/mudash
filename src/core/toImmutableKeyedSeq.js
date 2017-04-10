import { Seq } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableKeyedSeq from './isImmutableKeyedSeq'
import isObject from './isObject'
import isString from './isString'
import toImmutableSeq from './toImmutableSeq'

export default function toImmutableKeyedSeq(data) {
  if (isImmutableKeyedSeq(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toKeyedSeq()
  } else if (isString(data) || isArray(data)) {
    return toImmutableSeq(data).toKeyedSeq()
  } else if (isObject(data)) {
    return Seq.Keyed(data)
  }
  return Seq.Keyed()
}
