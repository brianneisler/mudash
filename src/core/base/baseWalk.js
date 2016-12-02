import _ from 'lodash'
import castPath from '../util/castPath'
import get from '../get'

export default function baseWalk(data, path, iteratee, walkee) {
  if (_.isFunction(path)) {
    walkee = iteratee
    iteratee = path
    path = undefined
  } else {
    path = castPath(path)
  }
  const target = path ? get(data, path) : data
  return walkee(target, path, iteratee, (...args) => walkee(...args, walkee))
}
