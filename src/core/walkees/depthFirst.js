import forEach from '../forEach'
import isArray from '../isArray'
import isObject from '../isObject'
import isObjectLike from '../isObjectLike'

export default function depthFirst(data, path, iteratee, recur) {
  let result = true
  if (isObjectLike(data)) {
    forEach(data, (value, key) => {
      const fullKey = (path).concat([key]).join('.')
      result = iteratee(value, fullKey, data)
      if (result !== false && (isObject(value) || isArray(value))) {
        return recur(value, fullKey, iteratee)
      }
      return result
    })
  }
  return result
}
