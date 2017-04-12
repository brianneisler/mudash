import { baseUpdate } from './base'
import { castFunction, castPath } from './util'
import getKey from './getKey'
import setKey from './setKey'

export default function updateWith(data, maybePath, updater, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined
  return data == null ? data : baseUpdate(data, castPath(maybePath, data), castFunction(updater), setKey, getKey, { customizer })
}
