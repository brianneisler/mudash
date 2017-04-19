import count from './count'
import isOrdered from './isOrdered'
import slice from './slice'

export default function pop(data) {
  if (!isOrdered(data)) {
    return data
  }
  const length = count(data)
  const endIndex = length > 0 ? length - 1 : 0
  return slice(data, 0, endIndex)
}
