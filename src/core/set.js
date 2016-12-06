import { baseSet } from './base'
import { assocKey } from './util'

export default function set(data, path, value) {
  return data == null ? data : baseSet(data, path, value, assocKey)
}
