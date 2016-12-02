import { symbolProto } from './native'
const nativeSymbolToString = symbolProto ? symbolProto.toString : undefined
export default nativeSymbolToString
