import { baseGet } from './base'
import { castPath, getKey } from './util'

export default function get(data, maybePath, defaultValue) {
  let result = undefined
  if (data != null) {
    result = baseGet(data, castPath(maybePath, data), getKey)
  }
  return result === undefined ? defaultValue : result
}
