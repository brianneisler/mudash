import { Symbol } from './context'
import isObject from './isObject'

const emptyIterator = { next: () => ({done: true})}

export default function iterator(data) {
  return isObject(data) ? data[Symbol.iterator]() : emptyIterator
}
