import { Seq } from 'immutable'
import isImmutable from './isImmutable'
import isImmutableSeq from './isImmutableSeq'

export default function toImmutableSeq(data) {
  if (isImmutableSeq(data)) {
    return data
  } else if (isImmutable(data)) {
    return data.toSeq()
  }
  return Seq(data)
}
