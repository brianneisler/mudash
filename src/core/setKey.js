import { assocKey } from './util'

export default function setKey(data, key, value) {
  return data == null ? data : assocKey(data, key, value)
}
