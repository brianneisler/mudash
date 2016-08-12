import filterNot from './filterNot'
import { keyIn } from '../composers'

export default function omit(data, keys) {
  return filterNot(data, keyIn(keys))
}
