import { MAX_SAFE_INTEGER } from '../constants'
import { reIsUint } from '../regex'

export default function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length)
}
