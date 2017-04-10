import { contextSymbolIsConcatSpreadable } from './context'
import isIndexed from './isIndexed'
import isString from './isString'

export default function isFlattenable(data) {
  return (isIndexed(data) && !isString(data)) ||
    !!(contextSymbolIsConcatSpreadable && data && data[contextSymbolIsConcatSpreadable])
}
