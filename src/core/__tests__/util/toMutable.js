import isImmutable from './isImmutable'
export default function toMutable(data) {
  return isImmutable(data)
    ? data.toJS()
    : data
}
