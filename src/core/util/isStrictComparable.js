import _ from 'lodash'
export default function isStrictComparable(value) {
  return value === value && !_.isObject(value)
}
