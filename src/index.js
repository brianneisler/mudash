import { _hint } from './util'
import { compose, iterable } from './core'

const butLast = compose(_hint('butLast'), iterable)
const chunk = _hint('chunk')
const compact = _hint('compact')
const _delete = _hint('delete')
const dropRight = _hint('dropRight')
const findIndex = _hint('findIndex')
const join = _hint('join')
const merge = _hint('merge', true)
const mergeIn = _hint('mergeIn', true)
const reverse = _hint('reverse')
const sortBy = _hint('sortBy')
const tail = _hint('tail')
const toArray = _hint('toArray')
const unset = _hint('unset')

export {
  butLast,
  chunk,
  compact,
  _delete as delete,
  dropRight,
  findIndex,
  join,
  merge,
  mergeIn,
  reverse,
  sortBy,
  tail,
  toArray,
  unset
}
export * from './core'
export { default as property } from './composers/property'
