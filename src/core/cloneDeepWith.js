import _ from 'lodash'
import { withDeepClone } from './with'

export default function cloneDeepWith(data, customizer) {
  return _.cloneDeepWith(data, withDeepClone(customizer))
}
