import { reUnicode } from '../regex'

export default function unicodeSize(string) {
  let result = reUnicode.lastIndex = 0
  while (reUnicode.test(string)) {
    ++result
  }
  return result
}
