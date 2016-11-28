export default function arrayPush(array, values) {
  let index = -1
  const length = values.length
  const offset = array.length

  while (++index < length) {
    array[offset + index] = values[index]
  }
  return array
}
