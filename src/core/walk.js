import _ from 'lodash'
import baseWalk from './baseWalk'
import depthFirst from '../walkees/depthFirst'

export function walk(data, path, iteratee = _.identity, walkee = depthFirst) {
  baseWalk(data, path, iteratee, walkee)
  return data
}
