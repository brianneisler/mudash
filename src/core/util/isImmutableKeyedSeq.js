import { Seq } from 'immutable'
export default function isImmutableKeyedSeq(data) {
  return data instanceof Seq.Keyed
}
