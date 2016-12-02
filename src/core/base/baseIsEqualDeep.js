import _ from 'lodash'
import { Stack } from '../cache'
import { ARRAY_TAG, ARGS_TAG, COMPARE_PARTIAL_FLAG, OBJECT_TAG } from '../constants'
import contextHasOwnProperty from '../context/contextHasOwnProperty'
import copyObject from '../util/copyObject'
import getTag from '../util/getTag'
import baseEqualArrays from './baseEqualArrays'
import baseEqualByTag from './baseEqualByTag'
import baseEqualObjects from './baseEqualObjects'
import baseKeys from './baseKeys'


export default function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  let objIsArr    = _.isArray(object)
  const othIsArr  = _.isArray(other)
  let objTag      = objIsArr ? ARRAY_TAG : getTag(object)
  let othTag      = othIsArr ? ARRAY_TAG : getTag(other)

  if (objTag == ARGS_TAG) {
    objTag = OBJECT_TAG
    object = copyObject(object, baseKeys(object))
  }
  if (othTag == ARGS_TAG) {
    othTag = OBJECT_TAG
    other = copyObject(other, baseKeys(other))
  }

  let objIsObj = objTag == OBJECT_TAG
  const othIsObj = othTag == OBJECT_TAG
  const isSameTag = objTag == othTag

  if (isSameTag && _.isBuffer(object)) {
    if (!_.isBuffer(other)) {
      return false
    }
    objIsArr = true
    objIsObj = false
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack)
    return (objIsArr || _.isTypedArray(object))
      ? baseEqualArrays(object, other, bitmask, customizer, equalFunc, stack)
      : baseEqualByTag(object, other, objTag, bitmask, customizer, equalFunc, stack)
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    const objIsWrapped = objIsObj && contextHasOwnProperty.call(object, '__wrapped__')
    const othIsWrapped = othIsObj && contextHasOwnProperty.call(other, '__wrapped__')

    if (objIsWrapped || othIsWrapped) {
      const objUnwrapped = objIsWrapped ? object.value() : object
      const othUnwrapped = othIsWrapped ? other.value() : other

      stack || (stack = new Stack)
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)
    }
  }
  if (!isSameTag) {
    return false
  }
  stack = stack || new Stack
  return baseEqualObjects(object, other, bitmask, customizer, equalFunc, stack)
}
