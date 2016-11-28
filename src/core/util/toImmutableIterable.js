import { Iterable } from 'immutable'
import isImmutableIterable from './isImmutableIterable'

export default function toImmutableIterable(data) {
  if (isImmutableIterable(data)) {
    return data
  }
  return Iterable(data)
}
