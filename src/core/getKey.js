import isImmutable from './isImmutable'

export default function getKey(object, key) {
  if (object != null) {
    if (isImmutable(object)) {
      return object.get(key)
    }
    if (key === '') {
      return object
    }
    return object[key]
  }
}
