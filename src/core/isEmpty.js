import _ from 'lodash'
import isImmutable from './isImmutable'

export default function isEmpty(data) {
  if (isImmutable(data)) {
    return data.isEmpty()
  }
  return _.isEmpty(data)
}
