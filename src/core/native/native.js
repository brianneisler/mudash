import { context, Symbol } from '../context'
import getNative from '../util/getNative'

const DataView = getNative(context, 'DataView')
const Map = getNative(context, 'Map')
const Promise = getNative(context, 'Promise')
const Set = getNative(context, 'Set')
const WeakMap = getNative(context, 'WeakMap')

const symbolProto = Symbol ? Symbol.prototype : undefined

export {
  DataView,
  Map,
  Promise,
  Set,
  WeakMap,

  symbolProto
}
