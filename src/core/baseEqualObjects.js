import { COMPARE_PARTIAL_FLAG } from './constants'
import getKey from './getKey'
import hasKey from './hasKey'
import hasKeyIn from './hasKeyIn'
import keys from './keys'
import size from './size'

export default function baseEqualObjects(object, other, bitmask, customizer, equalFunc, stack) {
  console.log('Made it here!!')
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG
  const objProps = keys(object)
  const objLength = size(objProps)
  const othProps = keys(other)
  const othLength = size(othProps)

  if (objLength != othLength && !isPartial) {
    return false
  }
  let index = objLength
  while (index--) {
    const key = getKey(objProps, index)
    if (!(isPartial ? hasKeyIn(other, key) : hasKey(other, key))) {
      return false
    }
  }
  // Assume cyclic values are equal.
  const stacked = stack.get(object)
  if (stacked && stack.get(other)) {
    return stacked == other
  }
  let result = true
  stack.set(object, other)
  stack.set(other, object)

  let skipCtor = isPartial
  while (++index < objLength) {
    const key = getKey(objProps, index)
    const objValue = getKey(object, key)
    const othValue = getKey(other, key)
    let compared

    if (customizer) {
      compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack)
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false
      break
    }
    skipCtor || (skipCtor = key == 'constructor')
  }
  if (result && !skipCtor) {
    const objCtor = object.constructor
    const othCtor = other.constructor

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
      ('constructor' in object && 'constructor' in other) &&
      !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
        typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false
    }
  }
  stack['delete'](object)
  stack['delete'](other)
  return result
}
