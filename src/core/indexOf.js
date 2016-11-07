import _ from 'lodash'
import isImmutable from './isImmutable'
import slice from './slice'

export default function indexOf(data, value, fromIndex) {
  const part = slice(data, fromIndex)
  if (isImmutable(part)) {
    return part.indexOf(value)
  }
  return _.indexOf(part, value)
}
