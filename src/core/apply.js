import isFunction from './isFunction'

export default function apply(method, args) {
  return isFunction(method) ? method.apply(null, args) : null
}
