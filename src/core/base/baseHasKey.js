import imHasKey from '../im/imHasKey'
import muHasKey from '../mu/muHasKey'
import isImmutable from '../isImmutable'

export default function baseHasKey(associative, key) {
  return isImmutable(associative)
    ? imHasKey(associative, key)
    : muHasKey(associative, key)
}
