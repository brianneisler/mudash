import { baseGet } from './base'
import { castPath } from './util'
import getKey from './getKey'

export default function get(data, maybePath, defaultValue) {
  let result = undefined
  if (data != null) {
    result = baseGet(data, castPath(maybePath, data), getKey)
  }
  return result === undefined ? defaultValue : result
}
