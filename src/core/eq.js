// TODO BRN: Not sure if this is the right way to go about this. Should this remain string equals even for immutable values?
import Immutable from 'immutable'
import isImmutable from './isImmutable'
export default function eq(value, other) {
  return value === other || (value !== value && other !== other) || (isImmutable(value) && isImmutable(other) && Immutable.is(value, other))
}
