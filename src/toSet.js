import Immutable from 'immutable'

export default function toSet(data) {
  return Immutable.Set.isSet(data) ? data : Immutable.Set(data)
}
