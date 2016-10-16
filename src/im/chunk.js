import _ from 'lodash'
import { isIterateeCall, push, slice, size, toList } from '../core'

export default function chunk(data, _size, guard) {
  if ((guard ? isIterateeCall(data, _size, guard) : size === undefined)) {
    _size = 1
  } else {
    _size = Math.max(_.toInteger(_size), 0)
  }
  const length = data ? size(data) : 0
  if (!length || _size < 1) {
    return toList([])
  }
  let index = 0
  let result = toList([])

  while (index < length) {
    result = push(result, slice(data, index, (index += _size)))
  }
  return result
}
