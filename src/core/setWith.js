import { baseSet } from './base'
import setKey from './setKey'

export default function setWith(data, path, value, customizer) {
  return data == null ? data : baseSet(data, path, value, setKey, { customizer })
}
