import _ from 'lodash'
import { List, Map, OrderedMap, OrderedSet, Seq, Set, Stack } from 'immutable'
import isImmutable from './isImmutable'

export default function getTypeFactory(data) {
  if (isImmutable(data)) {
    if (OrderedMap.isOrderedMap(data)) {
      return OrderedMap
    } else if (OrderedSet.isOrderedSet(data)) {
      return OrderedSet
    } else if (Stack.isStack(data)) {
      return Stack
    } else if (Set.isSet(data)) {
      return Set
    } else if (Map.isMap(data)) {
      return Map
    } else if (List.isList(data)) {
      return List
    } else if (Seq.isSeq(data)) {
      return Seq
    }
  }
  return _.identity
}
