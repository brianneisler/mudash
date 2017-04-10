import { Iterable } from 'immutable'
import { contextSymbolIterator } from './context'
import { hasKey } from './util'
import isImmutable from './isImmutable'
import isObject from './isObject'

export default function isIterable(data) {
  if (isImmutable(data)) {
    return Iterable.isIterable(data)
  }
  return hasKey(data, 'length') || isObject(data) || hasKey(data, contextSymbolIterator)
}
