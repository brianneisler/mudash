import _ from 'lodash'
import { Iterable, List, Map, OrderedMap, OrderedSet, Seq, Set, Stack } from 'immutable'

// export default function immutables() {
//   return [
//     Iterable(),
//     List(),
//     Map(),
//     OrderedMap(),
//     OrderedSet(),
//     Seq(),
//     Seq.Indexed(),
//     Seq.Keyed(),
//     Seq.Set(),
//     Set(),
//     Stack()
//   ]
// }

const typeMap = {
  Iterable, List, Map, OrderedMap, OrderedSet, Seq, Set, Stack
}
export default function immutables(context, selected = ['List', 'Map', 'OrderedMap', 'OrderedSet', 'Seq', 'Seq.Indexed', 'Seq.Keyed', 'Seq.Set', 'Set', 'Stack']) {
  return _.flatten(
    _.map(selected, path => _.get(typeMap, path)())
  )
}
