import arrayPush from '../array/arrayPush'
import isArray from '../isArray'

export default function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  const result = keysFunc(object)
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object))
}
