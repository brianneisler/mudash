import filter from './filter'
import slice from './slice'

export default function find(data, predicate, fromIndex = 0) {
  return filter(slice(data, fromIndex), predicate)
}
