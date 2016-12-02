import nativeDefineProperty from '../native/nativeDefineProperty'

export default function baseAssignValue(object, key, value) {
  if (key == '__proto__' && nativeDefineProperty) {
    nativeDefineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    })
  } else {
    object[key] = value
  }
}
