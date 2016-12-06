import concat from './concat'
import size from './size'
import slice from './slice'

export default function splice(data, startIndex, removeNum, ...values) {
  if (startIndex < 0) {
    startIndex = size(data) + startIndex
  }
  if (!removeNum || removeNum < 0) {
    removeNum = 0
  }
  return concat(
    slice(data, 0, startIndex),
    values,
    slice(data, startIndex + removeNum)
  )
}
