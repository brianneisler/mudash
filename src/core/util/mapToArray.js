import { Array } from './context'

export default function mapToArray(map) {
  let index = -1
  const result = Array(map.size)

  map.forEach((value, key) => {
    result[++index] = [key, value]
  })
  return result
}
