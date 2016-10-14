import _ from 'lodash'
import concat from './concat'
import isImmutable from './isImmutable'

export default function push(data, value) {
  if (_.isNil(data)) {
    data = []
  }

  if (isImmutable(data)) {
    return data.push(value)
  }
  return concat(data, [value])
}
