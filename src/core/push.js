import _ from 'lodash'
import isImmutable from './isImmutable'

export default function push(data, value) {
  if (_.isNil(data)) {
    data = []
  }
  if (data && _.isFunction(data.push)) {
    if (isImmutable(data)) {
      data = data.push(value)
    } else {
      data.push(value)
    }
  }
  return data
}
