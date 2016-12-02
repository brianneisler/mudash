import { NULL_TAG, UNDEFINED_TAG } from '../constants'
import { _Object, contextSymbolToStringTag } from '../context'
import objectToString from '../object/objectToString'
import getRawTag from './getRawTag'

export default function getTag(value) {
  if (value == null) {
    return value === undefined ? UNDEFINED_TAG : NULL_TAG
  }
  value = _Object(value)
  return (contextSymbolToStringTag && contextSymbolToStringTag in value)
    ? getRawTag(value)
    : objectToString(value)
}
