import { nativeObjectToString, symToStringTag } from './context'
import hasOwnProperty from './hasOwnProperty'

export default function getRawTag(value) {
  const isOwn = hasOwnProperty.call(value, symToStringTag)
  const tag = value[symToStringTag]
  let unmasked
  try {
    value[symToStringTag] = undefined
    unmasked = true
  } catch (error) {}  // eslint-disable-line no-empty

  const result = nativeObjectToString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}
