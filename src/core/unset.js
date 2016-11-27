import baseUnset from './baseUnset'
import setKey from './setKey'
import unsetKey from './unsetKey'
export default function unset(data, path) {
  return data == null ? data : baseUnset(data, path, unsetKey, setKey)
}
