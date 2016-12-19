import { baseUpdate } from './base'
import { assocKey, castFunction, castPath, getKey } from './util'

export default function updateWith(data, maybePath, updater, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined
  return data == null ? data : baseUpdate(data, castPath(maybePath, data), castFunction(updater), assocKey, getKey, { customizer })
}
