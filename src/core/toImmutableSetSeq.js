import { Seq } from 'immutable'
import isArray from './isArray'
import isImmutable from './isImmutable'
import isImmutableSetSeq from './isImmutableSetSeq'
import isObject from './isObject'
import isString from './isString'
import toImmutableSeq from './toImmutableSeq'

export default function toImmutableSetSeq(data) {
  if (isImmutableSetSeq(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toSetSeq()
  } else if (isString(data) || isArray(data)) {
    return Seq.Indexed(data)
  } else if (isObject(data)) {
    return toImmutableSeq(data).toSetSeq()
  }
  return Seq.Set(data)
}
