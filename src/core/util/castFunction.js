import identity from '../identity'
import isFunction from '../isFunction'
export default function castFunction(value) {
  return isFunction(value) ? value : identity
}
