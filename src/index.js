import { _hint } from './util'
import { compose, iterable } from './core'

const assign = _hint('assign', true)
const butLast = compose(_hint('butLast'), iterable)
const chunk = _hint('chunk')
const compact = _hint('compact')
const _delete = _hint('delete')
const dropRight = _hint('dropRight')
const findIndex = _hint('findIndex')
const join = _hint('join')
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

export {
  assign,
  butLast,
  chunk,
  compact,
  _delete as delete,
  dropRight,
  findIndex,
  join,
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
  unset
}
export * from './core'
export { default as property } from './composers/property'
