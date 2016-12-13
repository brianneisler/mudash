import Immutable from 'immutable'

export default function keyed() {
  return {
    'an object': Object,
    'an Immutable.Map': Immutable.Map,
    'an Immutable.OrderedMap': Immutable.OrderedMap,
    'an Immutable.Seq': Immutable.Seq
  }
}
