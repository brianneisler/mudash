import count from '../count'
import getKey from '../getKey'

export default function mutationPushAll(data, values) {
  let index = -1
  const length = count(values)

  while (++index < length) {
    data.push(getKey(values, index))
  }
  return data
}
