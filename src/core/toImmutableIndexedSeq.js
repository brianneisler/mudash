import _ from 'lodash'
import { Seq } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableIndexedSeq from './isImmutableIndexedSeq'
import toImmutableSeq from './toImmutableSeq'

export default function toImmutableIndexedSeq(data) {
  if (isImmutableIndexedSeq(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toIndexedSeq()
  } else if (_.isString(data) || _.isArray(data)) {
    return Seq.Indexed(data)
  } else if (_.isObject(data)) {
    return toImmutableSeq(data).toIndexedSeq()
  }
  return Seq.Indexed()
}
