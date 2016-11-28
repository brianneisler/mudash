import _ from 'lodash'
import { INFINITY } from '../constants'

export default function toKey(value) {
  if (typeof value == 'string' || _.isSymbol(value)) {
    return value
  }
  const result = (value + '')
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}
