import { baseSet, setKey } from './util'

export default function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value, setKey)
}
