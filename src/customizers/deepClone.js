import _ from 'lodash'
import { isImmutable } from '../core'

export default function deepClone(data) {
  if (isImmutable(data)) {
    data.forEach((value, key) => {
      data = data.set(key, _.cloneDeepWith(value, deepClone))
    })
    return data
  }
}
