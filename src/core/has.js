import { baseHas } from './base'
import { castPath } from './util'
import hasKey from './hasKey'

export default function has(data, maybePath, hasKeyFunc = hasKey) {
  return data == null ? data : baseHas(data, castPath(maybePath), hasKeyFunc)
}
