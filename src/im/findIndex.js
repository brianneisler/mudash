import { slice } from '../core'
export default function findIndex(data, predicate, fromIndex = 0) {
  return slice(data, fromIndex).findIndex(predicate)
}
