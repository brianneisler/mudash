import asciiSize from './asciiSize'
import hasUnicode from './hasUnicode'
import unicodeSize from './unicodeSize'

export default function stringSize(string) {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize(string)
}
