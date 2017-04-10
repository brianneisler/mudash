import { STRING_TAG } from './constants'
import getTag from './util/getTag'
import isArray from './isArray'

export default function isString(value) {
  const type = typeof value
  return type == 'string' || (type == 'object' && value != null && !isArray(value) && getTag(value) == STRING_TAG)
}
