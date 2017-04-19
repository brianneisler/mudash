import { _Object } from './context'
import { reIsDeepProp, reIsPlainProp } from './regex'
import isArray from './isArray'
import isSymbol from './isSymbol'

export default function isKey(value, object) {
  if (isArray(value)) {
    return false
  }
  const type = typeof value
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in _Object(object))
}
