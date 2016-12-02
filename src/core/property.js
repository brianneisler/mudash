import { baseProperty, basePropertyDeep } from './base'
import isKey from './isKey'
import toKey from './toKey'

export default function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
}
