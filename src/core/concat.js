import _ from 'lodash'
import isImmutable from './isImmutable'

export default function concat(data, ...args) {
  if (isImmutable(data)) {
    return data.concat(...args)
  }
  return _.concat(data, ...args)
}
