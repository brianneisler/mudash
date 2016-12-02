import { basePullAll  } from './base'
import isOrdered from './isOrdered'

export default function pullAll(data, values) {
  //TODO BRN: Seems like values could be anything that has values (array, object, iterable, etc)
  return (isOrdered(data) && isOrdered(values))
    ? basePullAll(data, values)
    : data
}
