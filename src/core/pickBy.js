import { getAllKeys } from './util'
import iteratee from './iteratee'
import { basePickBy } from './base'
import map from './map'

export default function pickBy(data, predicate) {
  if (data == null) {
    return {}
  }

  const props = map(getAllKeys(data), (prop) => [prop])
  predicate = iteratee(predicate)
  return basePickBy(data, props, (value, path) => predicate(value, path[0]))
}
