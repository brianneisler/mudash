import _ from 'lodash'
import identity from '../identity'
export default function castFunction(value) {
  return _.isFunction(value) ? value : identity
}
