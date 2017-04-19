import { SYMBOL_TAG } from './constants'
import getTag from './util/getTag'

export default function isSymbol(data) {
  const type = typeof data
  return type == 'symbol' || (type == 'object' && data != null && getTag(data) === SYMBOL_TAG)
}
