import { baseProperty, basePropertyDeep, isKey, toKey } from './util'
export default function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
}
