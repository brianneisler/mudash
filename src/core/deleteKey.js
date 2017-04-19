import baseClone from './base/baseClone'
import Associative from './protocols/Associative'
import Concatable from './protocols/Concatable'
import Sliceable from './protocols/Sliceable'
import eq from './eq'
import hasKey from './hasKey'
import isArrayLike from './isArrayLike'
import isImmutableSeq from './isImmutableSeq'
import isKeyed from './isKeyed'
import splice from './splice'

export default function deleteKey(data, key) {
  if (data == null) {
    return data
  }
  if (hasKey(data, key)) {
    if (Associative.is(data)) {
      //TODO BRN: Check for ES6 Map
      return data.delete(key)
    }
    if (isImmutableSeq(data) && isKeyed(data)) {
      //TODO BRN: This is SLOW... figure out a better way
      return data.filter((value, othKey) => !eq(othKey, key))
    }
    if (isArrayLike(data) || (Concatable.is(data) && Sliceable.is(data))) {
      return splice(data, key, 1)
    }
    //TODO BRN: Move clone to withMutations
    data = baseClone(data)
    delete data[key]
  }
  return data
}
