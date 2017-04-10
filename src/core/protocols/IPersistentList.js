import defprotocol from '../defprotocol'
import Function from '../types/Function'

const IPersistentList = defprotocol({
  clear: Function,
  delete: Function,
  get: Function,
  has: Function,
  insert: Function,
  pop: Function,
  push: Function,
  set: Function,
  shift: Function,
  unshift: Function
})

export default IPersistentList
