import _ from 'lodash'
import { contextSymbolIsConcatSpreadable } from './context'
import isIndexed from './isIndexed'

export default function isFlattenable(data) {
  return (isIndexed(data) && !_.isString(data)) ||
    !!(contextSymbolIsConcatSpreadable && data && data[contextSymbolIsConcatSpreadable])
}
