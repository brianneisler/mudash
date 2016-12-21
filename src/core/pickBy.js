import getAllKeys from './util/getAllKeys'
import getIteratee from './util/getIteratee'
import basePickBy from './base/basePickBy'

export default function pickBy(data, predicate) {
  // TODO check if data is null
  const props = getAllKeys(data)
  predicate = getIteratee(predicate)
  return basePickBy(data, props, function(value, path) {
    return predicate(value, path[0])
  })
}

// var props = arrayMap(getAllKeysIn(object), function(prop) {
//   return [prop];
// });
// predicate = getIteratee(predicate);
// return basePickBy(object, props, function(value, path) {
//   return predicate(value, path[0]);
// });
