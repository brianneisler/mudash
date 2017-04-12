import { baseSet } from './base'
import setKey from './setKey'

export default function set(data, path, value) {
  return data == null ? data : baseSet(data, path, value, setKey)
}
