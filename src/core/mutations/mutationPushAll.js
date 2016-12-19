import getKey from '../util/getKey'
import size from '../size'

export default function mutationPushAll(data, values) {
  let index = -1
  const length = size(values)

  while (++index < length) {
    data.push(getKey(values, index))
  }
  return data
}
