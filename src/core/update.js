import { baseUpdate } from './base'
import { assocKey, castFunction, castPath, getKey } from './util'

export default function update(data, maybePath, updater) {
  return data == null ? data : baseUpdate(data, castPath(maybePath, data), castFunction(updater), assocKey, getKey)
}
