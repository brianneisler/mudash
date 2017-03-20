import baseForRight from './baseForRight'
import keys from '../keys'

export default function baseForOwnRight(data, iteratee) {
  return data && baseForRight(data, iteratee, keys)
}
