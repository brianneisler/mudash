import _ from 'lodash'
import assocKey from './assocKey'
import baseSet from './baseSet'
import forEach from './forEach'

export default function assoc(data, path, value) {
  if (_.isString(path)) {
    data = baseSet(data, path, value, assocKey)
  } else {
    forEach(path, (pathValue, pathKey) => {
      data = assoc(data, pathKey, pathValue)
    })
  }
  return data
}
