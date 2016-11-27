import _ from 'lodash'
import { reIsHostCtor, reIsNative } from '../regex'
import isMasked from './isMasked'
import toSource from './toSource'

export default function baseIsNative(value) {
  if (!_.isObject(value) || isMasked(value)) {
    return false
  }
  const pattern = _.isFunction(value) ? reIsNative : reIsHostCtor
  return pattern.test(toSource(value))
}
