import _ from 'lodash'
import isImmutable from './isImmutable'

export default function count(data) {
  if (isImmutable(data)) {
    return data.count()
  }
  return _.size(data)
}
