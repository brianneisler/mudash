import getKey from '../util/getKey'

export default function baseProperty(key) {
  return function(data) {
    return getKey(data, key)
  }
}
