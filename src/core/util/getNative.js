import baseIsNative from './baseIsNative'
import getValue from './getValue'

export default function getNative(object, key) {
  const value = getValue(object, key)
  return baseIsNative(value) ? value : undefined
}
