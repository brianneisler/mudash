import _ from 'lodash'
import isFunction from './isFunction'
import isImmutable from './isImmutable'

export default function cloneWith(data, customizer) {
  if (isImmutable(data)) {
    if (isFunction(customizer)) {
      const result = customizer(data)
      if (!_.isUndefined(result)) {
        return result
      }
    }
    return data
  }
  return _.cloneWith(data, customizer)
}
