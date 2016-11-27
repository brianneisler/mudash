import { maskSrcKey } from './context'
export default function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func)
}
