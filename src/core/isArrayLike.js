import isLength from './isLength'

export default function isArrayLike(data) {
  return data != null && typeof data != 'function' && isLength(data.length)
}
