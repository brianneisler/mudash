import _ from 'lodash'
import isImmutable from './isImmutable'

export default function join(data, seperator = ',') {
  return isImmutable(data)
    ? data.join(seperator)
    : _.join(data, seperator)
}
