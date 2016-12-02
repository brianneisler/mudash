import _ from 'lodash'
import { MAX_MEMOIZE_SIZE } from '../constants'

export default function memoizeCapped(func) {
  const result = _.memoize(func, (key) => {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear()
    }
    return key
  })

  const cache = result.cache
  return result
}
