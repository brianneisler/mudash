import _ from 'lodash'
import { List, Map, OrderedMap, OrderedSet, Seq, Set, Stack } from 'immutable'
import isImmutable from './isImmutable'

export default function getType(data) {
  if (isImmutable(data)) {
    if (OrderedMap.isOrderedMap(data)) {
      return 'Immutable.OrderedMap'
    } else if (OrderedSet.isOrderedSet(data)) {
      return 'Immutable.OrderedSet'
    } else if (Stack.isStack(data)) {
      return 'Immutable.Stack'
    } else if (Set.isSet(data)) {
      return 'Immutable.Set'
    } else if (Map.isMap(data)) {
      return 'Immutable.Map'
    } else if (List.isList(data)) {
      return 'Immutable.List'
    } else if (Seq.isSeq(data)) {
      return 'Immutable.Seq'
    }
  }
  if (_.isArray(data)) {
    return 'array'
  }
  return typeof data
}
