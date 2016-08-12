import _ from 'lodash'

export default function apply(method, args) {
  return _.isFunction(method) ? method.apply(null, args) : null
}
