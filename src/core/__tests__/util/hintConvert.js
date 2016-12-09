import isImmutable from './isImmutable'
import toImmutable from './toImmutable'
import toMutable from './toMutable'

export default function hintConvert(data, value) {
  return isImmutable(data)
    ? toImmutable(value)
    : toMutable(value)
}
