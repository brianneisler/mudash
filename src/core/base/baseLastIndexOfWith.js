import withComparatorValue from '../with/withComparatorValue'
import baseFindIndex from './baseFindIndex'

export default function baseLastIndexOfWith(data, value, fromIndex, comparator) {
  return baseFindIndex(data, withComparatorValue(comparator, value), fromIndex, true)
}
