import { Array } from '../context'

export default function setToArray(set) {
  let index = -1
  const result = Array(set.size)

  set.forEach(function(value) {
    result[++index] = value
  })
  return result
}
