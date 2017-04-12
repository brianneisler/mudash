import Extendable from './protocols/Extendable'
import Inheriter from './protocols/Inheriter'
import Reducable from './protocols/Reducable'

export default function extend(extendables, def) {
  if (!Reducable.is(extendables) || Extendable.is(extendables)) {
    extendables = [extendables]
  }
  const result = extendables.reduce((extendable, inheriter) => {
    if (!extendable) {
      if (!Extendable.is(inheriter)) {
        throw new Error('Expected Extendable data type')
      }
      return inheriter
    }
    if (!Inheriter.is(inheriter)) {
      throw new Error('Expected Inheriter data type')
    }
    return inheriter.inherit(extendable)
  })
  if (!Extendable.is(result)) {
    throw new Error('Expected Extendable data type')
  }
  return result.extend(def)
}
