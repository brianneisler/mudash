import { slice } from '../core'

export default function indexOf(data, value, fromIndex) {
  return slice(data, fromIndex).indexOf(value)
}
