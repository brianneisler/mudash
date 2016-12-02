import { _Object, contextHasOwnProperty } from '../context'
import nativeKeys from '../native/nativeKeys'
import isPrototype from '../isPrototype'


export default function objectKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object)
  }
  const result = []
  for (const key in _Object(object)) {
    if (contextHasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key)
    }
  }
  return result
}
