export default function isObjectLike(value) {
  return value != null && typeof value == 'object'
}
