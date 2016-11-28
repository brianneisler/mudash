import baseGet from './baseGet'
export default function basePropertyOfDeep(data) {
  return function(path) {
    return baseGet(data, path)
  }
}
