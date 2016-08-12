import isImmutable from './isImmutable'
import Immutable from 'immutable'

export default function toImmutable(data) {
  return isImmutable(data) ? data : Immutable.fromJS(data)
}
