import _ from 'lodash'
import { baseWalk } from './base'
import { depthFirst } from './walkees'

export function walk(data, path, iteratee = _.identity, walkee = depthFirst) {
  baseWalk(data, path, iteratee, walkee)
  return data
}
