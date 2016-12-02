//TODO BRN: This all needs to be fixed. context should be specifiable
import _ from 'lodash'
import ES6Symbol from 'es6-symbol'
import { moduleExports, root } from '../free'

const contextProps = [
  'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
  'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
  'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
  'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
  '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
]

const context     = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps))

const {
  Array,
  Date,
  DataView,
  Error,
  Function,
  Map,
  Math,
  Object: _Object,
  Promise,
  RegExp,
  Set,
  String,
  TypeError,
  Uint8Array,
  WeakMap
} = context

const arrayProto  = Array.prototype
const funcProto   = Function.prototype
const objectProto = Object.prototype

const Buffer = moduleExports ? context.Buffer : undefined
const Symbol = context.Symbol || ES6Symbol

const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined
const objectCreate = Object.create
const spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined

const coreJsData  = context['__core-js_shared__']
const maskSrcKey = (function() {
  const uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '')
  return uid ? ('Symbol(src)_1.' + uid) : ''
}())

export {
  context,
  contextProps,

  Array,
  Buffer,
  Date,
  DataView,
  Error,
  Function,
  Map,
  Math,
  _Object,
  Promise,
  RegExp,
  Set,
  String,
  Symbol,
  TypeError,
  Uint8Array,
  WeakMap,

  arrayProto,
  funcProto,
  objectProto,

  allocUnsafe,
  objectCreate,
  spreadableSymbol,

  coreJsData,
  maskSrcKey
}
