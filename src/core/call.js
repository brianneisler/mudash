import apply from './apply'

export default function call(method, ...args) {
  return apply(method, args)
}
