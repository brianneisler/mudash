import _ from 'lodash'
import isImmutable from './isImmutable'

export default function tail(data) {
  return isImmutable(data)
    ? data.rest()
    : _.tail(data)
}
