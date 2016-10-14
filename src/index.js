import { _hint } from './util'
import { compose, forEach, iterable } from './core'

const assign = _hint('assign', true)
const butLast = compose(_hint('butLast'), iterable)
const chunk = _hint('chunk')
const compact = _hint('compact')
const count = _hint('count')
const _delete = _hint('delete')
const dropRight = _hint('dropRight')
const each = forEach
const filter = _hint('filter')
const filterNot = _hint('filterNot')
const find = _hint('find')
const findIndex = _hint('findIndex')
const first = _hint('first')
const groupBy = _hint('groupBy')
const includes = _hint('includes')
const indexOf = _hint('indexOf')
const isEmpty = _hint('isEmpty')
const join = _hint('join')
const keys = _hint('keys')
const last = _hint('last')
const map = _hint('map')
const merge = _hint('merge', true)
const mergeIn = _hint('mergeIn', true)
const omit = _hint('omit')
const omitBy = _hint('omitBy')
const pick = _hint('pick')
const reduce = _hint('reduce')
const reduceRight = _hint('reduceRight')
const reject = _hint('reject')
const reverse = _hint('reverse')
const size = _hint('size')
const slice = _hint('slice')
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
  count,
  _delete as delete,
  dropRight,
  each,
  filter,
  filterNot,
  find,
  findIndex,
  first,
  groupBy,
  includes,
  indexOf,
  isEmpty,
  join,
  keys,
  last,
  map,
  merge,
  mergeIn,
  omit,
  omitBy,
  pick,
  reduce,
  reduceRight,
  reject,
  reverse,
  size,
  slice,
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
