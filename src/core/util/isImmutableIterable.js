import { Iterable } from 'immutable'

export default function isImmutableIterable(value) {
  return Iterable.isIterable(value)
}
