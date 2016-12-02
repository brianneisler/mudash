import { funcToString } from './context'

export default function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func)
    } catch (e) {} // eslint-disable-line no-empty
    try {
      return (func + '')
    } catch (e) {} // eslint-disable-line no-empty
  }
  return ''
}
