import { baseSet } from './base'
import setKey from './setKey'

export default function setWith(object, path, value, customizer) {
  return object == null ? object : baseSet(object, path, value, setKey, { customizer })
}
