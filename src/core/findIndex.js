import each from './each'
import iteratee from './iteratee'
import slice from './slice'

export default function findIndex(data, predicate, fromIndex = 0) {
  predicate = iteratee(predicate)
  let foundIndex = undefined
  each(slice(data, fromIndex), (value, index) => {
    const result = predicate(value)
    if (result) {
      foundIndex = index
      return false
    }
  })
  return foundIndex
}
