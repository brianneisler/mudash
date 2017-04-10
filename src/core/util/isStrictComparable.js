import isObject from '../isObject'

export default function isStrictComparable(value) {
  return value === value && !isObject(value)
}
