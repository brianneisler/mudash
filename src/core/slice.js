import _ from 'lodash'
import isImmutable from './isImmutable'

export default function slice(data, start = 0, end) {
  return isImmutable(data)
    ? data.slice(start, end)
    : _.slice(data, start, end)
}
