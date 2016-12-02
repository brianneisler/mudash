import { keyIn } from './composers'
import filter from './filter'

export default function pick(data, keys) {
  return filter(data, keyIn(keys))
}
