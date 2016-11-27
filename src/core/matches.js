import baseIsEqual from './baseIsEqual'
import get from './get'
import keys from './keys'
import size from './size'
import { COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG } from './constants'
import { _Object } from './util'

export default function matches(source) {
  const props = keys(source)
  return (data) => {
    let length = size(props)
    if (data == null) {
      return !length
    }
    data = _Object(data)
    while (length--) {
      const key = get(props, length)
      if (!(key in data &&
          baseIsEqual(get(source, key), get(data, key), COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG)
      )) {
        return false
      }
    }
    return true
  }
}
