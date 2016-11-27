import _ from 'lodash'
import forEach from '../forEach'

export default function depthFirst(data, path, iteratee, recur) {
  let result = true
  if (_.isObjectLike(data)) {
    forEach(data, (value, key) => {
      const fullKey = (path).concat([key]).join('.')
      result = iteratee(value, fullKey, data)
      if (result !== false && (_.isObject(value) || _.isArray(value))) {
        return recur(value, fullKey, iteratee)
      }
      return result
    })
  }
  return result
}
