import { baseUnset } from './base'
import { assocKey, dissocKey } from './util'

export default function unset(data, path) {
  return data == null ? data : baseUnset(data, path, dissocKey, assocKey)
}
