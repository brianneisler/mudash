import each from './each'
import iteratee from './iteratee'
import slice from './slice'

export default function find(data, predicate, fromIndex = 0) {
  predicate = iteratee(predicate)
  let found = undefined
  each(slice(data, fromIndex), (value) => {
    const result = predicate(value)
    if (result) {
      found = value
      return false
    }
  })
  return found
}
