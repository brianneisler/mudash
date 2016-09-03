import _ from 'lodash'
import isImmutable from './isImmutable'

export default function clone(data) {
  if (isImmutable(data)) {
    return data
  }
  return _.clone(data)
}
