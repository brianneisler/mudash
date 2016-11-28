import { Seq } from 'immutable'
export default function isImmutableSeq(data) {
  return Seq.isSeq(data)
}
