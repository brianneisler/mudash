import Immutable from 'immutable';

export default function toMap(data) {
  return Immutable.Map.isMap(data) ? data : Immutable.Map(data);
}
