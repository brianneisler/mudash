import cloneDeep from './cloneDeep'
import { baseIteratee } from './util'
export default function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : cloneDeep(func))
}
