import { baseWrapperValue } from './base'
export default function wrapperValue() {
  return baseWrapperValue(this.__wrapped__, this.__actions__)
}
