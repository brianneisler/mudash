import isImmutable from './isImmutable'

export default function hasKey(object, key) {
  return object != null && ((
    (isImmutable(object) && object.has(key))
  ) || (
    key in object
  ))
}
