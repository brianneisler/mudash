import isImmutable from './isImmutable'

export default function unsetKey(data, key) {
  if (isImmutable(data)) {
    data = data.delete(key)
  } else {
    delete data[key]
  }
  return data
}
