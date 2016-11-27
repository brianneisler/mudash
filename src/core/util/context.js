//TODO BRN: This all needs to be fixed. context should be specifiable
import _ from 'lodash'
import ES6Symbol from 'es6-symbol'
import { moduleExports, root } from './free'
import overArg from './overArg'

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
  Error,
  Function,
  Math,
  Object: _Object,
  RegExp,
  String,
  TypeError
} = context

const arrayProto  = Array.prototype
const funcProto   = Function.prototype
const objectProto = Object.prototype

const coreJsData  = context['__core-js_shared__']

const { toString: funcToString } = funcProto
const {
  hasOwnProperty,
  toString: nativeObjectToString
} = objectProto

const maskSrcKey = (function() {
  const uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '')
  return uid ? ('Symbol(src)_1.' + uid) : ''
}())

const Buffer = moduleExports ? context.Buffer : undefined
const Symbol = context.Symbol || ES6Symbol
const { Uint8Array } = context

const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined
const getPrototype = overArg(Object.getPrototypeOf, Object)
const objectCreate = Object.create
const { propertyIsEnumerable } = objectProto
const { splice } = arrayProto
const spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined
const symIterator = Symbol ? Symbol.iterator : undefined
const { toStringTag: symToStringTag } = Symbol

export {
  context,
  contextProps,

  Array,
  Buffer,
  Date,
  Error,
  Function,
  Math,
  _Object,
  RegExp,
  String,
  Symbol,
  TypeError,
  Uint8Array,

  arrayProto,
  funcProto,
  objectProto,

  maskSrcKey,

  funcToString,
  hasOwnProperty,
  nativeObjectToString,

  allocUnsafe,
  getPrototype,
  objectCreate,
  propertyIsEnumerable,
  splice,
  spreadableSymbol,
  symIterator,
  symToStringTag
}
