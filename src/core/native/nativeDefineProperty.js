import { _Object } from '../context'
import getNative from '../util/getNative'

const nativeDefineProperty = (function() {
  try {
    const func = getNative(_Object, 'defineProperty')
    func({}, '', {})
    return func
  } catch (e) {} // eslint-disable-line no-empty
}())
export default nativeDefineProperty
