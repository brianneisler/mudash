import getTypeFactory from './getTypeFactory'
import isImmutable from './isImmutable'

export default function hintSameType(data, value) {
  return isImmutable(data)
    ? getTypeFactory(data)(value)
    : value
}
