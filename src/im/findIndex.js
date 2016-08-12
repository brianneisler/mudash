import slice from './slice'
export default function findIndex(data, predicate, fromIndex = 0) {
  return slice(data, fromIndex).findIndex(predicate)
}
