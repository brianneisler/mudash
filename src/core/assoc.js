import _ from 'lodash'
import forEach from './forEach'
import { baseSet } from './base'
import { assocKey } from './util'

export default function assoc(data, path, value) {
  if (_.isString(path)) {
    data = baseSet(data, path, value, assocKey)
  } else {
    forEach(path, (pathValue, pathKey) => {
      data = baseSet(data, pathKey, pathValue, assocKey)
    })
  }
  return data
}
