import _ from 'lodash'
import forEach from './forEach'
import { baseUnset } from './base'
import { assocKey, dissocKey } from './util'

export default function dissoc(data, path) {
  if (data == null) {
    return data
  }
  if (_.isString(path)) {
    data = baseUnset(data, path, dissocKey, assocKey)
  } else {
    //TODO BRN: Improve this so that it uses withMutations when making multiple modifications
    forEach(path, (pathValue) => {
      data = baseUnset(data, pathValue, dissocKey, assocKey)
    })
  }
  return data
}
