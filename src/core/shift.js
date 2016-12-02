import size from './size'
import slice from './slice'

export default function shift(data, number) {
  return slice(data, number, size(data))
}
