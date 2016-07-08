import isImmutable from './isImmutable';

export default function getKey(object, key) {
  if (object != null) {
    return isImmutable(object) ? object.get(key) : object[key];
  }
}
