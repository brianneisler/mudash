import Immutable from 'immutable';

export default function toImmutable(data) {
  return Immutable.fromJS(data);
}
