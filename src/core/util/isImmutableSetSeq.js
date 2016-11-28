import { Seq } from 'immutable'
export default function isImmutableSetSeq(data) {
  return data instanceof Seq.Set
}
