import { _hint } from './util'
import { compose, forEach, iterable } from './core'

const assign = _hint('assign', true)
const butLast = compose(_hint('butLast'), iterable)
const chunk = _hint('chunk')
const compact = _hint('compact')
const _delete = _hint('delete')
const dropRight = _hint('dropRight')
const each = forEach
const findIndex = _hint('findIndex')
const first = _hint('first')
const groupBy = _hint('groupBy')
const join = _hint('join')
const keys = _hint('keys')
const last = _hint('last')
const map = _hint('map')
const merge = _hint('merge', true)
const mergeIn = _hint('mergeIn', true)
const reduce = _hint('reduce')
const reduceRight = _hint('reduceRight')
const reverse = _hint('reverse')
const some = _hint('some')
const sortBy = _hint('sortBy')
const tail = _hint('tail')
const take = _hint('take')
const toArray = _hint('toArray')
const unset = _hint('unset')
const values = _hint('values')

export {
  assign,
  butLast,
  chunk,
  compact,
  _delete as delete,
  dropRight,
  each,
  findIndex,
  first,
  groupBy,
  join,
  keys,
  last,
  map,
  merge,
  mergeIn,
  reduce,
  reduceRight,
  reverse,
  some,
  sortBy,
  tail,
  take,
  toArray,
  unset,
  values
}
export * from './core'
export { default as property } from './composers/property'
