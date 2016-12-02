import { baseHasKey } from './base'
import isAssociative from './isAssociative'

export default function hasKey(data, key) {
  if (isAssociative(data)) {
    return baseHasKey(data, key)
  }
  return false
}
