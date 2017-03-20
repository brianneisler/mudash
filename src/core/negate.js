import { FUNC_ERROR_TEXT } from './constants'

export default function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  return function(...args) {
    return !predicate.apply(this, args)
  }
}
