import _ from 'lodash'
import isFunction from '../isFunction'
import isImmutable from '../isImmutable'

export default function withDeepClone(customizer) {
  const cloner = (data, key, object) => {
    if (isFunction(customizer)) {
      const result = customizer(data, key, object)
      if (!_.isUndefined(result)) {
        return result
      }
    }
    if (isImmutable(data)) {
      data.forEach((value, _key) => {
        data = data.set(_key, _.cloneDeepWith(value, cloner))
      })
      return data
    }
  }
  return cloner
}
