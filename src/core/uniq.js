import { baseUniq } from './base'
import isIndexed from './isIndexed'

export default function uniq(data) {
  return isIndexed(data)
    ? baseUniq(data)
    : []
}
