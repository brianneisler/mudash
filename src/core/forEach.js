import _ from 'lodash'
import isImmutable from './isImmutable'

export default function forEach(data, sideEffect) {
  if (isImmutable(data)) {
    data.forEach(sideEffect)
  } else {
    _.forEach(data, sideEffect)
  }
  return data
}
