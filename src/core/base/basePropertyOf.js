import getKey from '../util/getKey'

export default function basePropertyOf(data) {
  return function(key) {
    return getKey(data, key)
  }
}
