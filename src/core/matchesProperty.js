import { baseMatchesProperty } from './base'
import cloneDeep from './cloneDeep'

export default function matchesProperty(path, srcValue) {
  return baseMatchesProperty(path, cloneDeep(srcValue))
}
