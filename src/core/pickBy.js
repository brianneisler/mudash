import getAllKeys from './util/getAllKeys'
import getIteratee from './util/getIteratee'
import basePickBy from './base/basePickBy'

export default function pickBy(data, predicate) {
  if (data == null) {
    return {}
  }

  const props = getAllKeys(data)
  predicate = getIteratee(predicate)
  return basePickBy(data, props, function(value, path) {
    return predicate(value, path[0])
  })
}
