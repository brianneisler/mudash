import getKey from './getKey'
export default function basePropertyOf(data) {
  return function(key) {
    return getKey(data, key)
  }
}
