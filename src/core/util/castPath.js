import _ from 'lodash'
import isArray from '../isArray'
import isKey from '../isKey'
import stringToPath from './stringToPath'

export default function castPath(value, data) {
  if (isArray(value)) {
    return value
  }
  return isKey(value, data) ? [value] : stringToPath(_.toString(value))
}
