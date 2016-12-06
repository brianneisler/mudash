import _ from 'lodash'
import { Iterable } from 'immutable'
import { contextSymbolIterator } from './context'
import hasKey from './hasKey'
import isImmutable from './isImmutable'

export default function isIterable(data) {
  if (isImmutable(data)) {
    return Iterable.isIterable(data)
  }
  return hasKey(data, 'length') || _.isObject(data) || hasKey(data, contextSymbolIterator)
}
