import { baseHas } from './base'
import { castPath, hasKey } from './util'
import isAssociative from './isAssociative'

export default function has(data, maybePath, hasKeyFunc = hasKey) {
  if (isAssociative(data)) {
    return baseHas(data, castPath(maybePath), hasKeyFunc)
  }
  return data
}
