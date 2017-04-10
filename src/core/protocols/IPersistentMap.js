import defprotocol from '../defprotocol'
import Function from '../types/Function'

const IPersistentMap = defprotocol({
  clear: Function,
  delete: Function,
  entries: Function,
  forEach: Function,
  get: Function,
  has: Function,
  keys: Function,
  set: Function,
  values: Function
})

export default IPersistentMap
