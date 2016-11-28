import { context, _Object, Symbol } from './context'
import getNative from './getNative'

const DataView = getNative(context, 'DataView')
const Map = getNative(context, 'Map')
const Promise = getNative(context, 'Promise')
const Set = getNative(context, 'Set')
const WeakMap = getNative(context, 'WeakMap')
const nativeCreate = getNative(_Object, 'create')

const symbolProto = Symbol ? Symbol.prototype : undefined
const symbolToString = symbolProto ? symbolProto.toString : undefined

export {
  DataView,
  Map,
  Promise,
  Set,
  WeakMap,

  nativeCreate,
  symbolProto,
  symbolToString
}
