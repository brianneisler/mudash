import baseSet from './baseSet';
import setKey from './setKey';

export default function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value, setKey);
}
