import { filter } from '../core'
import { truthy } from '../predicates'

export default function compact(data) {
  return filter(data, truthy)
}
