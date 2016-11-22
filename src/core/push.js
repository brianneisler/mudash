import _ from 'lodash'
import concat from './concat'
import isImmutable from './isImmutable'

export default function push(data, ...values) {
  if (_.isNil(data)) {
    data = []
  }

  if (isImmutable(data)) {
    return data.push(...values)
  }
  return concat(data, [...values])
}
