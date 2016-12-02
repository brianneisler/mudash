import { OrderedSet } from 'immutable'
export default function isImmutableOrderedSet(data) {
  return OrderedSet.isOrderedSet(data)
}
