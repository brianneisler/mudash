import { _Object } from './context'
import hasOwnProperty from './hasOwnProperty'
import isPrototype from './isPrototype'
import nativeKeys from './nativeKeys'

export default function objectKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object)
  }
  const result = []
  for (const key in _Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key)
    }
  }
  return result
}
