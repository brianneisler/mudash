import {
  ARRAY_BUFFER_TAG,
  BOOL_TAG,
  COMPARE_PARTIAL_FLAG,
  COMPARE_UNORDERED_FLAG,
  DATA_VIEW_TAG,
  DATE_TAG,
  ERROR_TAG,
  MAP_TAG,
  NUMBER_TAG,
  REGEXP_TAG,
  SET_TAG,
  STRING_TAG,
  SYMBOL_TAG
} from '../constants'
import { Uint8Array } from './context'
import baseEqualArrays from './baseEqualArrays'
import eq from './eq'
import mapToArray from './mapToArray'
import setToArray from './setToArray'
import symbolValueOf from './symbolValueOf'


export default function baseEqualByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  let convert
  let result
  let stacked
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG

  switch (tag) {
    case DATA_VIEW_TAG:
      if ((object.byteLength != other.byteLength) ||
      (object.byteOffset != other.byteOffset)) {
        return false
      }
      object = object.buffer
      other = other.buffer
    case ARRAY_BUFFER_TAG:
      if ((object.byteLength != other.byteLength) ||
      !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false
      }
      return true

    case BOOL_TAG:
    case DATE_TAG:
    case NUMBER_TAG:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other)

    case ERROR_TAG:
      return object.name == other.name && object.message == other.message

    case REGEXP_TAG:
    case STRING_TAG:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '')

    case MAP_TAG:
      convert = mapToArray

    case SET_TAG:
      convert || (convert = setToArray)

      if (object.size != other.size && !isPartial) {
        return false
      }
      // Assume cyclic values are equal.
      stacked = stack.get(object)
      if (stacked) {
        return stacked == other
      }
      bitmask |= COMPARE_UNORDERED_FLAG

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other)
      result = baseEqualArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack)
      stack['delete'](object)
      return result

    case SYMBOL_TAG:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other)
      }
  }
  return false
}
