import { baseSet } from './base'
import { assocKey } from './util'

export default function setWith(data, path, value, customizer) {
  return data == null ? data : baseSet(data, path, value, assocKey, { customizer })
}
