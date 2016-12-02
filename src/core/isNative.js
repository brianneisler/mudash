import { baseIsNative } from './base'
import { CORE_ERROR_TEXT } from './constants'
import { isMaskable } from './util'

export default function isNative(value) {
  if (isMaskable(value)) {
    throw new Error(CORE_ERROR_TEXT)
  }
  return baseIsNative(value)
}
