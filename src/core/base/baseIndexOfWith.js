import withComparatorValue from '../with/withComparatorValue'
import baseFindIndex from './baseFindIndex'

export default function baseIndexOfWith(data, value, comparator, fromIndex) {
  return baseFindIndex(data, withComparatorValue(comparator, value), fromIndex)
}
