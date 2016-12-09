import Immutable from 'immutable'
import isImmutable from './isImmutable'
export default function toImmutable(data) {
  return !isImmutable(data)
    ? Immutable.fromJS(data)
    : data
}
