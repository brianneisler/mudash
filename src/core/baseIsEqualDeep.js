import _ from 'lodash'
import { Stack } from './cache'
import { ARRAY_TAG, ARGS_TAG, COMPARE_PARTIAL_FLAG, OBJECT_TAG } from './constants'
import { getTag, hasOwnProperty } from './util'
import baseEqualArrays from './baseEqualArrays'
import baseEqualByTag from './baseEqualByTag'
import baseEqualObjects from './baseEqualObjects'

export default function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  console.log('baseIsEqualDeep - object:', object, ' other:', other)
  let objIsArr    = _.isArray(object)
  const othIsArr  = _.isArray(other)
  let objTag      = ARRAY_TAG
  let othTag      = ARRAY_TAG

  if (!objIsArr) {
    objTag = getTag(object)
    objTag = objTag == ARGS_TAG ? OBJECT_TAG : objTag
  }
  if (!othIsArr) {
    othTag = getTag(other)
    othTag = othTag == ARGS_TAG ? OBJECT_TAG : othTag
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
  console.log('isSameTag:', isSameTag, ' objIsObj:', objIsObj, ' objIsArr:', objIsArr, ' _.isTypedArray(object):', _.isTypedArray(object))
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack)
    return (objIsArr || _.isTypedArray(object))
      ? baseEqualArrays(object, other, bitmask, customizer, equalFunc, stack)
      : baseEqualByTag(object, other, objTag, bitmask, customizer, equalFunc, stack)
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    const objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__')
    const othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__')

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
  stack || (stack = new Stack)
  return baseEqualObjects(object, other, bitmask, customizer, equalFunc, stack)
}
