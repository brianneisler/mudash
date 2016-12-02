import _ from 'lodash'
import { _Object, contextPropertyIsEnumerable } from '../context'
import arrayFilter from '../array/arrayFilter'
import nativeGetSymbols from '../native/nativeGetSymbols'

const getSymbols = !nativeGetSymbols ? _.stubArray : (object) => {
  if (object == null) {
    return []
  }
  object = _Object(object)
  return arrayFilter(nativeGetSymbols(object), (symbol) =>
    contextPropertyIsEnumerable.call(object, symbol)
  )
}
export default getSymbols
