import { baseHas, hasKey } from './util'

export default function has(object, path) {
  return object != null && baseHas(object, path, hasKey)
}
