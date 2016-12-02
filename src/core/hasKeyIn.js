import isImmutable from './isImmutable'

export default function hasKeyIn(data, key) {
  return data != null && ((
    (isImmutable(data) && data.has(key))
  ) || (
    key in data
  ))
}
