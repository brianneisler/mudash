import { Set } from 'immutable'
export default function isImmutableSet(data) {
  return Set.isSet(data)
}
