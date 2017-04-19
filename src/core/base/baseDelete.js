import castPath from '../util/castPath'
import getKey from '../getKey'
import isObject from '../isObject'
import toKey from '../toKey'

export default function baseDelete(data, path, deleteFunc, setFunc) {
  path = castPath(path)
  const index = 0
  return composeRecurPathDelete(path, deleteFunc, setFunc)(data, index)
}

function composeRecurPathDelete(path, deleteFunc, setFunc) {
  const length = path.length
  const lastIndex = length - 1

  const recurDelete = (data, index) => {
    if (!isObject(data)) {
      return data
    }
    const key = toKey(path[index])
    if (index != lastIndex) {
      let value = getKey(data, key)
      value = recurDelete(value, ++index)
      return setFunc(data, key, value)
    }
    return deleteFunc(data, key)
  }
  return recurDelete
}
