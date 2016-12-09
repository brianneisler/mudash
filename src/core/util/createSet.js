import _ from 'lodash'
import { INFINITY } from '../constants'
import { Set } from '../context'
import setToArray from './setToArray'

const createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? _.noop : function(values) { //eslint-disable-line no-sparse-arrays
  return new Set(values)
}
export default createSet
