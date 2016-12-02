import isImmutable from './isImmutable'
export default function toIndexed(data) {
  if (isImmutable(data)) {
    return data.toIndexedSeq()
  }
  //TODO BRN: mutable?
  return data
}
