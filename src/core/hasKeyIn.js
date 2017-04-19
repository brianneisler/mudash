import Keyed from './protocols/Keyed'

export default function hasKeyIn(data, key) {
  if (data != null) {
    if (Keyed.is(data)) {
      return data.has(key)
    }
    return !!(key in data)
  }
  return false
}
