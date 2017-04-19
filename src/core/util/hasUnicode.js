import { reHasUnicode } from '../regex'

export default function hasUnicode(string) {
  return reHasUnicode.test(string)
}
