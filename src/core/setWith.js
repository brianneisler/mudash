import { baseSet, setKey } from './util'

export default function setWith(object, path, value, customizer) {
  return object == null ? object : baseSet(object, path, value, setKey, { customizer })
}
