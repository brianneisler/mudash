import slice from './slice'

export default function indexOf(data, value, fromIndex) {
  return slice(data, fromIndex).indexOf(value)
}
