import { baseMatchesProperty } from './util'
import cloneDeep from './cloneDeep'

export default function matchesProperty(path, srcValue) {
  return baseMatchesProperty(path, cloneDeep(srcValue))
}
