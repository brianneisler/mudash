import _ from 'lodash'
import { _Object, propertyIsEnumerable } from './context'
import arrayFilter from './arrayFilter'
import nativeGetSymbols from './nativeGetSymbols'

const getSymbols = !nativeGetSymbols ? _.stubArray : (object) => {
  if (object == null) {
    return []
  }
  object = _Object(object)
  return arrayFilter(nativeGetSymbols(object), (symbol) =>
    propertyIsEnumerable.call(object, symbol)
  )
}
export default getSymbols
