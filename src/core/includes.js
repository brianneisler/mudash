import _ from 'lodash'
import isImmutable from './isImmutable'
import slice from './slice'

export default function includes(data, value, fromIndex) {
  const part = slice(data, fromIndex)
  if (isImmutable(part)) {
    return part.includes(value)
  }
  return _.includes(part, value)
}
