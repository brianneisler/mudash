import { Iterable } from 'immutable'

export default function isImmutable(value) {
  return (Iterable.isIterable(value) || (!!value && !!value['@@data']))
}
