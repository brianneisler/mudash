import { getAllKeys } from './util'
import iteratee from './iteratee'
import { baseOmitBy } from './base'
import map from './map'

export default function omitBy(data, predicate) {
  if (data == null) {
    return {}
  }

  const props = map(getAllKeys(data), (prop) => [prop])
  predicate = iteratee(predicate)
  return baseOmitBy(data, props, (value, path) => predicate(value, path[0]))
}
