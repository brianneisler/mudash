import toKey from '../util/toKey'

export default function baseGet(associative, path, getKeyFunc) {
  let data = associative
  let index = 0
  const { length } = path

  while (data != null && index < length) {
    const key = toKey(path[index++])
    data = getKeyFunc(data, key)
  }
  return (index && index == length) ? data : undefined
}
