import get from '../get'
export default function basePropertyDeep(path) {
  return function(data) {
    return get(data, path)
  }
}
