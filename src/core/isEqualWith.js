import _ from 'lodash'
import isEqual from './isEqual'
import isFunction from './isFunction'

export default function isEqualWith(value, other, customizer) {
  if (isFunction(customizer)) {
    const result = customizer(value, other)
    if (!_.isUndefined(result)) {
      return !!result
    }
  }
  return isEqual(value, other)
}
