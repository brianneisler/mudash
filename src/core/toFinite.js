import { INFINITY, MAX_INTEGER } from './constants'
import toNumber from './toNumber'

export default function toFinite(data) {
  if (!data) {
    return data === 0 ? data : 0
  }
  data = toNumber(data)
  if (data === INFINITY || data === -INFINITY) {
    const sign = (data < 0 ? -1 : 1)
    return sign * MAX_INTEGER
  }
  return data === data ? data : 0
}
