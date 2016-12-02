import _ from 'lodash'
import arrayPush from '../array/arrayPush'

export default function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  const result = keysFunc(object)
  return _.isArray(object) ? result : arrayPush(result, symbolsFunc(object))
}
