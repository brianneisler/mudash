import count from './count'
import slice from './slice'

export default function shift(data, number) {
  return slice(data, number, count(data))
}
