import getKey from './getKey';
import hasKey from './hasKey';
import isEqual from './isEqual';
import isImmutable from './isImmutable';

export default function setKey(object, key, value) {
  
  const objValue = getKey(object, key);
  if (!(hasKey(object, key) && isEqual(objValue, value)) || (value === undefined && !(hasKey(object, key)))) {
    if (isImmutable(object)) {
      object = object.set(key, value);
    } else {
      object[key] = value;
    }
  }
  return object;
}
