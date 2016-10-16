import _ from 'lodash'
import isImmutable from './isImmutable'

export default function slice(data, start = 0, end) {
  if (isImmutable(data)) {
    return data.slice(start, end)
  }
  return _.slice(data, start, end)
}
