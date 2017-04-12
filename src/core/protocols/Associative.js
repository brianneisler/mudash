import extend from '../extend'
import Function from '../types/Function'
import Keyed from './Keyed'

const Associative = extend(Keyed, {
  delete: Function,
  set: Function
})

export default Associative
