import isIndexed from './isIndexed'
import isKeyed from './isKeyed'

export default function isAssociative(data) {
  return isKeyed(data) || isIndexed(data)
}
