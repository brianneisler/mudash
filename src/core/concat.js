import _ from 'lodash'
import isImmutable from './isImmutable'

export default function concat(data, ...args) {
  return isImmutable(data)
    ? data.concat(...args)
    : _.concat(data, ...args)
}
