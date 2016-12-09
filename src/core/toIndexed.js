import _ from 'lodash'
import isImmutable from './isImmutable'
import isIndexed from './isIndexed'

export default function toIndexed(data) {
  if (isIndexed(data)) {
    return data
  }
  if (isImmutable(data)) {
    return data.toIndexedSeq()
  }
  if (_.isObject(data)) {
    return _.values(data)
  }
  return data
}
