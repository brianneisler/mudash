import _ from 'lodash'
import nativeMax from '../native/nativeMax'
import getSize from '../util/getSize'
import baseIndexOf from './baseIndexOf'

export default function baseIncludes(indexed, value, fromIndex) {
  const length = getSize(indexed)
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0)
  }
  return _.isString(indexed)
    ? (fromIndex <= length && indexed.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(indexed, value, fromIndex) > -1)
}
