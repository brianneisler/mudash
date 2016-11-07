import _ from 'lodash'
import get from './get'
import isKey from './isKey'

export default function baseWalk(data, path, iteratee, walkee) {
  if (_.isFunction(path)) {
    walkee = iteratee
    iteratee = path
    path = undefined
  } else {
    path = isKey(path, data) ? [path] : _.toPath(path)
  }
  const target = path ? get(data, path) : data
  return walkee(target, path, iteratee, (...args) => walkee(...args, walkee))
}
