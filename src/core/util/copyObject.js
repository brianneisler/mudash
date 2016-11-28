import assignValue from './assignValue'
import baseAssignValue from './baseAssignValue'

export default function copyObject(source, props, object, customizer) {
  const isNew = !object
  object = object || {}

  let index = -1
  const length = props.length

  while (++index < length) {
    const key = props[index]

    let newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined

    if (newValue === undefined) {
      newValue = source[key]
    }
    if (isNew) {
      baseAssignValue(object, key, newValue)
    } else {
      assignValue(object, key, newValue)
    }
  }
  return object
}
