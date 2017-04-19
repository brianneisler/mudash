import { MAX_SAFE_INTEGER } from './constants'

export default function isLength(data) {
  return typeof data == 'number' &&
    data > -1 && data % 1 == 0 && data <= MAX_SAFE_INTEGER
}
