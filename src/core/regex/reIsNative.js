import { RegExp, contextHasOwnProperty } from '../context'
import nativeFuncToString from '../native/nativeFuncToString'
import reRegExpChar from './reRegExpChar'

const reIsNative = RegExp('^' +
  nativeFuncToString.call(contextHasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
)
export default reIsNative
