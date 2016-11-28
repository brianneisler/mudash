import { symbolProto } from './native'
const symbolValueOf = symbolProto ? symbolProto.valueOf : undefined
export default symbolValueOf
