import { baseDelete } from './base'
import deleteKey from './deleteKey'
import forEach from './forEach'
import isString from './isString'
import setKey from './setKey'

export default function dissoc(data, path) {
  if (data == null) {
    return data
  }
  if (isString(path)) {
    data = baseDelete(data, path, deleteKey, setKey)
  } else {
    //TODO BRN: Improve this so that it uses withMutations when making multiple modifications
    forEach(path, (pathValue) => {
      data = baseDelete(data, pathValue, deleteKey, setKey)
    })
  }
  return data
}
