import count from './count'
import hintConvert from './hintConvert'
import isIterateeCall from './isIterateeCall'
import push from './push'
import slice from './slice'
import toInteger from './toInteger'

export default function chunk(data, size, guard) {
  if ((guard ? isIterateeCall(data, size, guard) : size === undefined)) {
    size = 1
  } else {
    size = Math.max(toInteger(size), 0)
  }
  const length = data ? count(data) : 0
  if (!length || size < 1) {
    return hintConvert(data, [])
  }
  let index = 0
  let result = hintConvert(data, [])

  while (index < length) {
    result = push(result, slice(data, index, (index += size)))
  }
  return result
}
