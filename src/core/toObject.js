import isImmutable from './isImmutable'

export default function toObject(data) {
  return isImmutable(data) ? data.toObject() : data
}
