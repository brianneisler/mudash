import { NULL_TAG, UNDEFINED_TAG } from '../constants'
import { _Object, symToStringTag } from './context'
import getRawTag from './getRawTag'
import objectToString from './objectToString'

export default function getTag(value) {
  if (value == null) {
    return value === undefined ? UNDEFINED_TAG : NULL_TAG
  }
  value = _Object(value)
  return (symToStringTag && symToStringTag in value)
    ? getRawTag(value)
    : objectToString(value)
}
