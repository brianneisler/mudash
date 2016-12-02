import nativeObjectToString from '../native/nativeObjectToString'

export default function objectToString(object) {
  return nativeObjectToString.call(object)
}
