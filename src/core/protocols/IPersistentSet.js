import defprotocol from '../defprotocol'
import Function from '../types/Function'

const IPersistentSet = defprotocol({
  add: Function,
  clear: Function,
  delete: Function,
  entries: Function,
  forEach: Function,
  has: Function,
  keys: Function,
  values: Function
})

export default IPersistentSet
