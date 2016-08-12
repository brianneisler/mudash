import getPrototype from './getPrototype'
import isImmutable from './isImmutable'

export default function hasKey(object, key) {
  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
  // that are composed entirely of index properties, return `false` for
  // `hasOwnProperty` checks of them.
  return object != null && ((
    (isImmutable(object) && object.has(key))
  ) || (
    (hasOwnProperty.call(object, key) ||
      (typeof object == 'object' && key in object && getPrototype(object) === null))
  ))
}
