import { baseSet } from './base'
import { arg2 } from './customizers'
import forEach from './forEach'
import getKey from './getKey'
import isFunction from './isFunction'
import isString from './isString'
import setKey from './setKey'

const customAssocKey = (customizer) => {
  return (data, key, value) => {
    const dataValue = getKey(data, key)
    value = customizer(dataValue, value)
    return setKey(data, key, value)
  }
}

export default function assocWith(data, path, value, customizer = arg2) {
  if (isFunction(value)) {
    customizer = value
  }
  const setFunc = customAssocKey(customizer)
  if (isString(path)) {
    data = baseSet(data, path, value, setFunc)
  } else {
    forEach(path, (pathValue, pathKey) => {
      data = baseSet(data, pathKey, pathValue, setFunc)
    })
  }
  return data
}
