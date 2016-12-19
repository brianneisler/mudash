import isImmutable from '../isImmutable'

//WARNING: This is a MUTABLE function
export default function unsetKey(data, key) {
  if (isImmutable(data)) {
    data = data.delete(key)
  } else {
    delete data[key]
  }
  return data
}
