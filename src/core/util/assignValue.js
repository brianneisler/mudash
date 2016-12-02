import { contextHasOwnProperty } from '../context'
import baseAssignValue from '../base/baseAssignValue'
import eq from '../eq'


export default function assignValue(object, key, value) {
  const objValue = object[key]
  if (!(contextHasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value)
  }
}
