import { baseProperty, basePropertyDeep } from './base'
import { toKey } from './util'
import isKey from './isKey'

export default function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
}
