import { Map } from 'immutable'
export default function isImmutableMap(data) {
  return Map.isMap(data)
}
