import withEqValue from '../with/withEqValue'
import baseFindIndex from './baseFindIndex'

export default function baseIndexOf(data, value, fromIndex) {
  return baseFindIndex(data, withEqValue(value), fromIndex)
}
