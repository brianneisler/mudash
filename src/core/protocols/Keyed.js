import defprotocol from '../defprotocol'
import Function from '../types/Function'

const Keyed = defprotocol({
  get: Function,
  has: Function
})

export default Keyed
