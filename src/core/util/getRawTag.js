import { contextHasOwnProperty, contextSymbolToStringTag } from '../context'
import nativeObjectToString from '../native/nativeObjectToString'

export default function getRawTag(value) {
  const isOwn = contextHasOwnProperty.call(value, contextSymbolToStringTag)
  const tag = value[contextSymbolToStringTag]
  let unmasked
  try {
    value[contextSymbolToStringTag] = undefined
    unmasked = true
  } catch (error) {}  // eslint-disable-line no-empty

  const result = nativeObjectToString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[contextSymbolToStringTag] = tag
    } else {
      delete value[contextSymbolToStringTag]
    }
  }
  return result
}
