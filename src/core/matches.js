import { baseMatches } from './util'
import cloneDeep from './cloneDeep'

export default function matches(source) {
  return baseMatches(cloneDeep(source))
}
