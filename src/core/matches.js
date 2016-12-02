import { baseMatches } from './base'
import cloneDeep from './cloneDeep'

export default function matches(source) {
  return baseMatches(cloneDeep(source))
}
