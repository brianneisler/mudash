import Immutable from 'immutable';

export default function toList(data) {
  return Immutable.List.isList(data) ? data : Immutable.List(data);
}
