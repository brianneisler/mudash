import { truthy } from './predicates'
import filter from './filter'

export default function compact(data) {
  return filter(data, truthy)
}
