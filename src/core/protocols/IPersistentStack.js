import defprotocol from '../defprotocol'
import Function from '../types/Function'

const IPersistentStack = defprotocol({
  peek: Function,
  pop: Function,
  push: Function
})

export default IPersistentStack
