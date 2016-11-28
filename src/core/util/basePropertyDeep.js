import baseGet from './baseGet'
export default function basePropertyDeep(path) {
  return function(data) {
    return baseGet(data, path)
  }
}
