import concat from './concat'
import size from './size'
import slice from './slice'
export default function circularShift(data, number) {
  const length = size(data)
  if (length === 0 || length === 1) {
    return data
  } else if (Math.abs(number) > length) {
    number = number % length
  }
  if (number === 0) {
    return data
  }
  if (number < 0) {
    number = length + number
  }
  return concat(slice(data, number, length), slice(data, 0, number))
}
