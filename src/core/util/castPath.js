import _ from 'lodash'
import isKey from '../isKey'
import stringToPath from './stringToPath'

export default function castPath(value, data) {
  if (_.isArray(value)) {
    return value
  }
  return isKey(value, data) ? [value] : stringToPath(_.toString(value))
}
