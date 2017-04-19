import count from './count'
import hintConvert from './hintConvert'
import slice from './slice'
import toInteger from './toInteger'

export default function dropRight(data, n = 1) {
  const length = count(data)
  if (!length) {
    return hintConvert(data, [])
  }
  n = n === undefined ? 1 : toInteger(n)
  n = length - n
  return slice(data, 0, n < 0 ? 0 : n)
}
