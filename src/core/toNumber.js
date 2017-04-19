import { NAN } from './constants'
import { reIsBadHex, reIsBinary, reIsOctal, reTrim } from './regex'
import isObject from './isObject'
import isSymbol from './isSymbol'

const freeParseInt = parseInt

export default function toNumber(data) {
  if (typeof data == 'number') {
    return data
  }
  if (isSymbol(data)) {
    return NAN
  }
  if (isObject(data)) {
    const other = typeof data.valueOf == 'function' ? data.valueOf() : data
    data = isObject(other) ? `${other}` : other
  }
  if (typeof data != 'string') {
    return data === 0 ? data : +data
  }
  data = data.replace(reTrim, '')
  const isBinary = reIsBinary.test(data)
  return (isBinary || reIsOctal.test(data))
    ? freeParseInt(data.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(data) ? NAN : +data)
}
