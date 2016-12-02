import _ from 'lodash'
import { Seq } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableSetSeq from './isImmutableSetSeq'
import toImmutableSeq from './toImmutableSeq'

export default function toImmutableSetSeq(data) {
  if (isImmutableSetSeq(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toSetSeq()
  } else if (_.isString(data) || _.isArray(data)) {
    return Seq.Indexed(data)
  } else if (_.isObject(data)) {
    return toImmutableSeq(data).toSetSeq()
  }
  return Seq.Set(data)
}
