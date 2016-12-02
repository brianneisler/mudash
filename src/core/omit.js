import { keyIn } from './composers'
import filterNot from './filterNot'

export default function omit(data, keys) {
  return filterNot(data, keyIn(keys))
}
