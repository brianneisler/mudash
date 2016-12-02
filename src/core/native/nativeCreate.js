import { _Object } from '../context'
import getNative from '../util/getNative'

const nativeCreate = getNative(_Object, 'create')
export default nativeCreate
