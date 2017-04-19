import { contextHasOwnProperty } from './context'
import Keyed from './protocols/Keyed'

export default function hasKey(data, key) {
  if (data != null) {
    if (Keyed.is(data)) {
      return data.has(key)
    }
    return contextHasOwnProperty.call(data, key)
  }
  return false
}
