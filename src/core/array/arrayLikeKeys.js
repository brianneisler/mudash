import _ from 'lodash'
import { contextHasOwnProperty, String } from '../context'
import baseTimes from '../base/baseTimes'
import isArray from '../isArray'
import isIndex from '../isIndex'

export default function arrayLikeKeys(value, inherited) {
  const isArr = isArray(value)
  const isArg = !isArr && _.isArguments(value)
  const isBuff = !isArr && !isArg && _.isBuffer(value)
  const isType = !isArr && !isArg && !isBuff && _.isTypedArray(value)
  const skipIndexes = isArr || isArg || isBuff || isType
  const result = skipIndexes ? baseTimes(value.length, String) : []
  const length = result.length

  for (const key in value) {
    if ((inherited || contextHasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key)
    }
  }
  return result
}
