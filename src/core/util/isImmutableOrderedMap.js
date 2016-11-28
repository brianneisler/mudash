import { OrderedMap } from 'immutable'
export default function isImmutableOrderedMap(data) {
  return OrderedMap.isOrderedMap(data)
}
