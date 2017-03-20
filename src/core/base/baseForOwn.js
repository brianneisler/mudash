import baseFor from './baseFor'
import keys from '../keys'

export default function baseForOwn(data, iteratee) {
  return data && baseFor(data, iteratee, keys)
}
