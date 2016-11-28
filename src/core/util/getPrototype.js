import { _Object } from './context'
import overArg from './overArg'
const getPrototype = overArg(_Object.getPrototypeOf, _Object)
export default getPrototype
