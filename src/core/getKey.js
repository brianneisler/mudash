import isImmutable from './isImmutable'

export default function getKey(data, key) {
  if (data != null) {
    return isImmutable(data)
      ? data.get(key)
      : data[key]
  }
}
