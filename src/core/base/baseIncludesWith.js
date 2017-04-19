import nativeMax from '../native/nativeMax'
import count from '../count'
import baseIndexOfWith from './baseIndexOf'

export default function baseIncludesWith(indexed, value, comparator, fromIndex) {
  const length = count(indexed)
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0)
  }
  return baseIndexOfWith(indexed, value, comparator, fromIndex) > -1
}
