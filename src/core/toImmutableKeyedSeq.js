import _ from 'lodash'
import { Seq } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableKeyedSeq from './isImmutableKeyedSeq'
import toImmutableSeq from './toImmutableSeq'

export default function toImmutableKeyedSeq(data) {
  if (isImmutableKeyedSeq(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toKeyedSeq()
  } else if (_.isString(data) || _.isArray(data)) {
    return toImmutableSeq(data).toKeyedSeq()
  } else if (_.isObject(data)) {
    return Seq.Keyed(data)
  }
  return Seq.Keyed()
}
