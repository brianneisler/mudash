import withEqValue from '../with/withEqValue'
import baseFindIndex from './baseFindIndex'

export default function baseLastIndexOf(data, value, fromIndex) {
  return baseFindIndex(data, withEqValue(value), fromIndex, true)
}
