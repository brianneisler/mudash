import arraySlice from './array/arraySlice'
import Sliceable from './protocols/Sliceable'
import count from './count'
import isArray from './isArray'
import toInteger from './toInteger'

export default function slice(data, start, end) {
  const length = count(data)
  start = start == null ? 0 : toInteger(start)
  end = end === undefined ? length : toInteger(end)
  if (end === length && start === 0) {
    return data
  }
  if (!length) {
    return data
  }
  if (!isArray(data)) {
    if (Sliceable.is(data)) {
      return data.slice(start, end)
    }
    throw new Error('Expected Sliceable data type or Array')
  }
  return arraySlice(data, start, end)
}
