import concat from './concat'
import count from './count'
import slice from './slice'
import toInteger from './toInteger'

export default function splice(data, startIndex, removeNum, ...values) {
  startIndex = toInteger(startIndex)
  if (startIndex < 0) {
    startIndex = count(data) + startIndex
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
