import { funcToString, RegExp } from '../util/context'
import hasOwnProperty from '../util/hasOwnProperty'
import reRegExpChar from './reRegExpChar'

const reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
)
export default reIsNative
