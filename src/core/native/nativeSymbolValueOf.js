import { symbolProto } from './native'
const nativeSymbolValueOf = symbolProto ? symbolProto.valueOf : undefined
export default nativeSymbolValueOf
