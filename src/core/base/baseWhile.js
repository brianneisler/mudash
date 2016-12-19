import getKey from '../util/getKey'
import size from '../size'
import slice from '../slice'

export default function baseWhile(data, predicate, isDrop, fromRight) {
  const length = size(data)
  let index = fromRight ? length : -1

  while (fromRight ? index-- : ++index < length) {
    if (!predicate(getKey(data, index), index, data)) {
      break
    }
  }

  return isDrop
    ? slice(data, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : slice(data, (fromRight ? index + 1 : 0), (fromRight ? length : index))
}
