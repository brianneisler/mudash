import { baseUnset, setKey, unsetKey } from './util'
export default function unset(data, path) {
  return data == null ? data : baseUnset(data, path, unsetKey, setKey)
}
