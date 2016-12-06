import _ from 'lodash'
import isImmutable from './isImmutable'
import size from './size'

export default function slice(data, start = 0, end) {
  const length = size(data)
  if (_.isNil(end)) {
    end = length
  }
  if (end === length && start === 0) {
    return data
  }
  return isImmutable(data)
    ? data.slice(start, end)
    //TODO BRN: This does not work for objects. Need to convert to an indexed key value pair array, slice that array, and then convert back to an object
    : _.slice(data, start, end)
}
