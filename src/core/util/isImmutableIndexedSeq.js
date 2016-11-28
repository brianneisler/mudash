import { Seq } from 'immutable'
export default function isImmutableIndexedSeq(data) {
  return data instanceof Seq.Indexed
}
