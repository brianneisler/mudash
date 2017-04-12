import castPath from '../util/castPath'
import getKey from '../util/getKey'
import toKey from '../util/toKey'
import isObject from '../isObject'

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
