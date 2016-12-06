import { Iterable } from 'immutable'
export default function isImmutable(data) {
  return Iterable.isIterable(data)
}
