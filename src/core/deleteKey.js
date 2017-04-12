import { dissocKey } from './util'

export default function deleteKey(data, key) {
  return data == null ? data : dissocKey(data, key)
}
