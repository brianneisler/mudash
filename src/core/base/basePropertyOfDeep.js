import get from '../get'
export default function basePropertyOfDeep(data) {
  return function(path) {
    return get(data, path)
  }
}
