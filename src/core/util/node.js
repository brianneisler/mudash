import { freeProcess } from './free'

const nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (e) {} // eslint-disable-line no-empty
}())

/* Node.js helper references. */
const nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer
const nodeIsDate = nodeUtil && nodeUtil.isDate
const nodeIsMap = nodeUtil && nodeUtil.isMap
const nodeIsRegExp = nodeUtil && nodeUtil.isRegExp
const nodeIsSet = nodeUtil && nodeUtil.isSet
const nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray

export {
  nodeUtil,
  nodeIsArrayBuffer,
  nodeIsDate,
  nodeIsMap,
  nodeIsRegExp,
  nodeIsSet,
  nodeIsTypedArray
}
