import baseAssignValue from './baseAssignValue'
import eq from './eq'
import hasOwnProperty from './hasOwnProperty'

export default function assignValue(object, key, value) {
  const objValue = object[key]
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value)
  }
}
