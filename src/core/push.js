import { Stacked } from './protocols'
import { withMutations } from './with'
import concat from './concat'
import isNil from './isNil'

const pushValues = withMutations((data, values) => {
  data.push(...values)
  return data
})

export default function push(data, ...values) {
  if (isNil(data)) {
    data = []
  }
  if (Stacked.is(data)) {
    return pushValues(data, values)
  }
  return concat(data, values)
}
