import { reIsHostCtor, reIsNative } from '../regex'
import isMasked from '../util/isMasked'
import isFunction from '../isFunction'
import isObject from '../isObject'
import toSource from '../toSource'

export default function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false
  }
  const pattern = isFunction(value) ? reIsNative : reIsHostCtor
  return pattern.test(toSource(value))
}
