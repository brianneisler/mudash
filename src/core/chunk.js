import _ from 'lodash'
import { hintConvert } from './hints'
import isIterateeCall from './isIterateeCall'
import push from './push'
import slice from './slice'
import size from './size'

export default function chunk(data, _size, guard) {
  if ((guard ? isIterateeCall(data, _size, guard) : size === undefined)) {
    _size = 1
  } else {
    _size = Math.max(_.toInteger(_size), 0)
  }
  const length = data ? size(data) : 0
  if (!length || _size < 1) {
    return hintConvert(data, [])
  }
  let index = 0
  let result = hintConvert(data, [])

  while (index < length) {
    result = push(result, slice(data, index, (index += _size)))
  }
  return result
}
