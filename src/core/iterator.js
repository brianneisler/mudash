import _ from 'lodash'
import { Symbol } from './context'

const emptyIterator = { next: () => ({done: true})}

export default function iterator(data) {
  return _.isObject(data) ? data[Symbol.iterator]() : emptyIterator
}
