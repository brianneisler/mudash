import baseWrapperValue from './baseWrapperValue'
export default function wrapperValue() {
  return baseWrapperValue(this.__wrapped__, this.__actions__)
}
