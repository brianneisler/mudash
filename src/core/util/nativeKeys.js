import overArg from './overArg'
import { _Object } from './context'
const nativeKeys = overArg(_Object.keys, _Object)
export default nativeKeys
