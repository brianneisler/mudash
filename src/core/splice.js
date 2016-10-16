import concat from './concat'
import size from './size'
import slice from './slice'

export default function splice(data, index, removeNum, ...values) {
  if (index < 0) {
    index = size(data) + index
  }
  if (!removeNum || removeNum < 0) {
    removeNum = 0
  }
  return concat(
    slice(data, 0, index),
    values,
    slice(data, index + removeNum)
  )
}
