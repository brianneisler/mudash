import { nativeObjectToString } from './context'
export default function objectToString(value) {
  return nativeObjectToString.call(value)
}
