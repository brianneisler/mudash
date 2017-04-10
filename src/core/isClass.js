export default function isClass(data) {
  return typeof data === 'function' && /^\s*class\s+/.test(data.toString())
}
