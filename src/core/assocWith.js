import _ from 'lodash'
import { baseSet } from './base'
import { arg2 } from './customizers'
import { assocKey, getKey } from './util'
import forEach from './forEach'

const customAssocKey = (customizer) => {
  return (data, key, value) => {
    const dataValue = getKey(data, key)
    value = customizer(dataValue, value)
    return assocKey(data, key, value)
  }
}

export default function assocWith(data, path, value, customizer = arg2) {
  if (_.isFunction(value)) {
    customizer = value
  }
  const setFunc = customAssocKey(customizer)
  if (_.isString(path)) {
    data = baseSet(data, path, value, setFunc)
  } else {
    forEach(path, (pathValue, pathKey) => {
      data = baseSet(data, pathKey, pathValue, setFunc)
    })
  }
  return data
}
