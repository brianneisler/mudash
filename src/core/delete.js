import { baseDelete } from './base'
import deleteKey from './deleteKey'
import setKey from './setKey'

export default function _delete(data, path) {
  return data == null ? data : baseDelete(data, path, deleteKey, setKey)
}
