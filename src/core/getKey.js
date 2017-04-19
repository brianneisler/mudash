import Keyed from './protocols/Keyed'

export default function getKey(data, key) {
  if (data != null) {
    return Keyed.is(data)
      ? data.get(key)
      : data[key]
  }
}
