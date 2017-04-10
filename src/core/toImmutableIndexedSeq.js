import { Seq } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableIndexedSeq from './isImmutableIndexedSeq'
import isObject from './isObject'
import isString from './isString'
import toImmutableSeq from './toImmutableSeq'

export default function toImmutableIndexedSeq(data) {
  if (isImmutableIndexedSeq(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toIndexedSeq()
  } else if (isString(data) || isArray(data)) {
    return Seq.Indexed(data)
  } else if (isObject(data)) {
    return toImmutableSeq(data).toIndexedSeq()
  }
  return Seq.Indexed()
}
