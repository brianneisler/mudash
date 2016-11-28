import { objectProto } from './context'

export default function isPrototype(data) {
  const Ctor = data && data.constructor
  const proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto
  return data === proto
}
