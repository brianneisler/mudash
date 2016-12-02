import { baseIteratee } from './base'
import cloneDeep from './cloneDeep'

export default function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : cloneDeep(func))
}
