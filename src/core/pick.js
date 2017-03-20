import { basePick } from './base'
import flatten from './flatten'

export default function pick(data, ...paths) {
  return data == null ? {} : basePick(data, flatten(paths))
}
